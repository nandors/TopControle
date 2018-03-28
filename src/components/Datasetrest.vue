<template>
</template>

<script>

import firebase from 'firebase'

import axios from 'axios'
import toastr from 'toastr'
// import VueFire from 'vuefire'

toastr.options['positionClass'] = 'toast-bottom-right'
// Vue.use(VueFire)

// let db = Firebase.database()
// let tabelaRef = db.ref('lojas')

export default {
//  firebase: {
//  registros: tabelaRef
//  },
  data: function () {
    return {
      dialog: false,
      registros: [],
      valid: true,
      search: '',
      token: null
    }
  },
  computed: {
    loading () {
      return this.$store.getters.getLoading
    }
  },
  watch: {
    dialog (val) {
      val || this.close()
    }
  },
  created () {
    this.carregar()
  },
  methods: {
    atualizatoken: async function () {
      var tok = ''
      await firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
        tok = idToken
      })
      return tok
    },
    carregar: function () {
      var vm = this
//      this.$store.dispatch('atualizaToken')
      vm.atualizatoken().then(function (tokenf) {
        axios.get('https://vspa-15b54.firebaseio.com/' + vm.nometabela + '.json?auth=' + tokenf)
        .then(function (res) {
          var retorno = res.data
          var novoArray = []
          for (var item in retorno) {
            retorno[item].key = item
            novoArray.push(retorno[item])
          }
          vm.registros = novoArray
//          console.log(vm.registros)
        })
      .catch(function (err) {
        console.log(err)
      })
      })

//      tabelaRef = db.ref('lojas')
    },
    addRegistro: function () {
//      const maplat = document.getElementById('getlat').value
//      const maplng = document.getElementById('getlng').value
//      mapRef.push({'lat': maplat, 'lng': maplng})
      var rg = this.newRegistro
      var vm = this

      if (this.$refs.form.validate()) {
        this.atualizatoken().then(function (tokenf) {
          axios.post('https://vspa-15b54.firebaseio.com/' + vm.nometabela + '.json?auth=' + tokenf, rg
          )
          .then(response => {
            vm.clear()
            vm.close()
            vm.carregar()
          })
          .catch(e => {
            console.log(e)
          })
//        tabelaRef.push(this.newRegistro)
        })
      }
    },
    updateRegistro: function (tabela) {
      let propriedade = ''
      for (propriedade in this.newRegistro) {
        this.newRegistro[propriedade] = tabela[propriedade]
      }
      const btnUpdate = document.getElementById('btnUp')
      btnUpdate.classList.remove('btn--disabled')
      const btnNew = document.getElementById('btnNew')
      btnNew.classList.add('btn--disabled')
      const inHidden = document.getElementById('registroKey')
      inHidden.value = tabela['key']
      this.dialog = true
    },
    updatebtn: function () {
      var vm = this
      const getIdUpdate = document.getElementById('registroKey')
      var key = getIdUpdate.value
      this.atualizatoken().then(function (tokenf) {
        axios.put('https://vspa-15b54.firebaseio.com/' + vm.nometabela + '/' + key + '.json?auth=' + tokenf, vm.newRegistro
        )
      .then(response => {
        vm.clear()
        const btnUpdate = document.getElementById('btnUp')
        btnUpdate.classList.add('btn--disabled')
        vm.close()
        vm.carregar()
      })
      .catch(e => {
        console.log(e)
      })
      })

//      tabelaRef.child(getIdUpdate.value).set(this.newRegistro)
    },
    removeRegistro: function (tabela) {
      var vm = this
      this.atualizatoken().then(function (tokenf) {
        confirm('Confirma a exclusão?') &&
          axios.delete('https://vspa-15b54.firebaseio.com/' + vm.nometabela + '/' + tabela['key'] + '.json?auth=' + tokenf)
          .then(response => {
            toastr.success('Registro removido')
            vm.carregar()
          })
          .catch(e => {
            console.log(e)
          })
      })
//        tabelaRef.child(tabela['key']).remove()
    },
    close () {
      const btnUpdate = document.getElementById('btnUp')
      btnUpdate.classList.add('btn--disabled')
      const btnNew = document.getElementById('btnNew')
      btnNew.classList.remove('btn--disabled')
      this.clear()
      this.dialog = false
    },
    clear () {
      this.$refs.form.reset()
    }

  }
}
</script>
