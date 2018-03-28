<template>
</template>

<script>

import Firebase from 'firebase'
import toastr from 'toastr'
import VueFire from 'vuefire'
import Vue from 'vue'

Vue.use(VueFire)
let db = Firebase.database()
let tabelaRef = db.ref('lojas')
toastr.options['positionClass'] = 'toast-bottom-right'

export default {
  firebase: {
    registros: tabelaRef
  },
  data: function () {
    return {
      dialog: false,
      items: [],
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
  methods: {
    addRegistro: function () {
//      const maplat = document.getElementById('getlat').value
//      const maplng = document.getElementById('getlng').value
//      mapRef.push({'lat': maplat, 'lng': maplng})
      if (this.$refs.form.validate()) {
        tabelaRef.push(this.newRegistro)
        this.clear()
        this.close()
      }
    },
    updateRegistro: function (tabela) {
      let propriedade = ''
      for (propriedade in this.newRegistro) {
        this.newRegistro[propriedade] = tabela[propriedade]
      }
/*      this.newRegistro.codigo = tabela.codigo
      this.newRegistro.nome = tabela.nome
      this.newRegistro.endereco = tabela.endereco
      this.newRegistro.cidade = tabela.cidade
      this.newRegistro.uf = tabela.uf
      this.newRegistro.fone = tabela.fone
      this.newRegistro.obs = tabela.obs
*/
      const btnUpdate = document.getElementById('btnUp')
      btnUpdate.classList.remove('btn--disabled')
      const btnNew = document.getElementById('btnNew')
      btnNew.classList.add('btn--disabled')
      const inHidden = document.getElementById('registroKey')
      inHidden.value = tabela['.key']
      this.dialog = true
    },
    updatebtn: function () {
      const getIdUpdate = document.getElementById('registroKey')
      tabelaRef.child(getIdUpdate.value).set(this.newRegistro)
      this.clear()
      const btnUpdate = document.getElementById('btnUp')
      btnUpdate.classList.add('btn--disabled')
      this.close()
    },
    removeRegistro: function (tabela) {
      confirm('Confirma a exclusão?') && tabelaRef.child(tabela['.key']).remove() && toastr.success('Registro removido')
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
