<template>
</template>

<script>

// import Firebase from 'firebase'

import axios from 'axios'
import toastr from 'toastr'
// import VueFire from 'vuefire'
import Vue from 'vue'

toastr.options["positionClass"] = "toast-bottom-right"
// Vue.use(VueFire)

// let db = Firebase.database()
// let tabelaRef = db.ref('lojas')

export default {
//  firebase: {
    //registros: tabelaRef
//  },
  data: function () {
    return {
      dialog: false,
      registros: [],
      valid: true,
      search: ''
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
  created() {
    this.carregar()

  },
  methods: {
    carregar: function () {
      var vm = this;
      axios.get('https://vspa-15b54.firebaseio.com/lojas.json')
      .then(function(res){
        var retorno = res.data;
        var novoArray = [];
        for (var item in retorno){
          retorno[item].key = item;
          novoArray.push(retorno[item]);
        };
          vm.registros = novoArray;
//          console.log(vm.registros);
      })
      .catch(function(err){
          console.log(err);
      })

//      tabelaRef = db.ref('lojas')
    },
    addRegistro: function () {
//      const maplat = document.getElementById('getlat').value
//      const maplng = document.getElementById('getlng').value
//      mapRef.push({'lat': maplat, 'lng': maplng})
      var vm = this.newRegistro;
      if (this.$refs.form.validate()) {
        axios.post('https://vspa-15b54.firebaseio.com/lojas.json', vm
        )
        .then(response => {
          this.clear()
          this.close()
          this.carregar()
        })
        .catch(e => {
          console.log(e)
        })
//        tabelaRef.push(this.newRegistro)
      }
    },
    updateRegistro: function (tabela) {
      let propriedade = ''
      for (propriedade in this.newRegistro)
      {
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
    const getIdUpdate = document.getElementById('registroKey')
    var key = getIdUpdate.value
    axios.put('https://vspa-15b54.firebaseio.com/lojas/'+ key + '.json' , this.newRegistro
    )
    .then(response => {
      this.clear()
      const btnUpdate = document.getElementById('btnUp')
      btnUpdate.classList.add('btn--disabled')
      this.close()
      this.carregar()
    })
    .catch(e => {
      console.log(e)
    })

//      tabelaRef.child(getIdUpdate.value).set(this.newRegistro)
    },
    removeRegistro: function (tabela) {
      confirm('Confirma a exclusão?') &&
        axios.delete('https://vspa-15b54.firebaseio.com/lojas/'+ tabela['key'] + '.json')
        .then(response => {
          toastr.success('Registro removido')
          this.carregar()
        })
        .catch(e => {
          console.log(e)
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
