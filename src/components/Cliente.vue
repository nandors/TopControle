<template>
  <div>
    <v-form ref="form" lazy-validation>
     <v-dialog v-model="dialog" width="800px">
      <v-btn color="primary" dark slot="activator" class="mb-2">Adicionar {{ titulo }}</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">Cadastro de {{ titulo }}</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtcodigo'
                    label='codigo'
                    :rules="[ v => !!v || 'codigo requerido']"
                    id='txtcodigo'
                    type='text'
                    v-model='newRegistro.codigo'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtnome'
                    label='nome'
                    :rules="[ v => !!v || 'nome requerido']"
                    id='txtnome'
                    type='text'
                    v-model='newRegistro.nome'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtcodnome'
                    label='codnome'
                    :rules="[ v => !!v || 'codnome requerido']"
                    id='txtcodnome'
                    type='text'
                    v-model='newRegistro.codnome'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtlimitecredito'
                    label='limitecredito'
                    :rules="[ v => !!v || 'limitecredito requerido']"
                    id='txtlimitecredito'
                    type='text'
                    v-model='newRegistro.limitecredito'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtcpf'
                    label='cpf'
                    :rules="[ v => !!v || 'cpf requerido']"
                    id='txtcpf'
                    type='text'
                    v-model='newRegistro.cpf'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtidentidade'
                    label='identidade'
                    :rules="[ v => !!v || 'identidade requerido']"
                    id='txtidentidade'
                    type='text'
                    v-model='newRegistro.identidade'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtnascimento'
                    label='nascimento'
                    :rules="[ v => !!v || 'nascimento requerido']"
                    id='txtnascimento'
                    type='text'
                    v-model='newRegistro.nascimento'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtestcivil'
                    label='estcivil'
                    :rules="[ v => !!v || 'estcivil requerido']"
                    id='txtestcivil'
                    type='text'
                    v-model='newRegistro.estcivil'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtconjuge'
                    label='conjuge'
                    :rules="[ v => !!v || 'conjuge requerido']"
                    id='txtconjuge'
                    type='text'
                    v-model='newRegistro.conjuge'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtcodnomeconjuge'
                    label='codnomeconjuge'
                    :rules="[ v => !!v || 'codnomeconjuge requerido']"
                    id='txtcodnomeconjuge'
                    type='text'
                    v-model='newRegistro.codnomeconjuge'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtpai'
                    label='pai'
                    :rules="[ v => !!v || 'pai requerido']"
                    id='txtpai'
                    type='text'
                    v-model='newRegistro.pai'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtmae'
                    label='mae'
                    :rules="[ v => !!v || 'mae requerido']"
                    id='txtmae'
                    type='text'
                    v-model='newRegistro.mae'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtendereco1'
                    label='endereco1'
                    :rules="[ v => !!v || 'endereco1 requerido']"
                    id='txtendereco1'
                    type='text'
                    v-model='newRegistro.endereco1'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtcomplemento'
                    label='complemento'
                    :rules="[ v => !!v || 'complemento requerido']"
                    id='txtcomplemento'
                    type='text'
                    v-model='newRegistro.complemento'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtcidade'
                    label='cidade'
                    :rules="[ v => !!v || 'cidade requerido']"
                    id='txtcidade'
                    type='text'
                    v-model='newRegistro.cidade'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtuf'
                    label='uf'
                    :rules="[ v => !!v || 'uf requerido']"
                    id='txtuf'
                    type='text'
                    v-model='newRegistro.uf'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtfone'
                    label='fone'
                    :rules="[ v => !!v || 'fone requerido']"
                    id='txtfone'
                    type='text'
                    v-model='newRegistro.fone'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtempresa'
                    label='empresa'
                    :rules="[ v => !!v || 'empresa requerido']"
                    id='txtempresa'
                    type='text'
                    v-model='newRegistro.empresa'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtendereco'
                    label='endereco'
                    :rules="[ v => !!v || 'endereco requerido']"
                    id='txtendereco'
                    type='text'
                    v-model='newRegistro.endereco'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtfonetrab'
                    label='fonetrab'
                    :rules="[ v => !!v || 'fonetrab requerido']"
                    id='txtfonetrab'
                    type='text'
                    v-model='newRegistro.fonetrab'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtobservacao'
                    label='observacao'
                    :rules="[ v => !!v || 'observacao requerido']"
                    id='txtobservacao'
                    type='text'
                    v-model='newRegistro.observacao'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtsigla'
                    label='sigla'
                    :rules="[ v => !!v || 'sigla requerido']"
                    id='txtsigla'
                    type='text'
                    v-model='newRegistro.sigla'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txttipocredito'
                    label='tipocredito'
                    :rules="[ v => !!v || 'tipocredito requerido']"
                    id='txttipocredito'
                    type='text'
                    v-model='newRegistro.tipocredito'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtanonasc'
                    label='anonasc'
                    :rules="[ v => !!v || 'anonasc requerido']"
                    id='txtanonasc'
                    type='text'
                    v-model='newRegistro.anonasc'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtaniversario'
                    label='aniversario'
                    :rules="[ v => !!v || 'aniversario requerido']"
                    id='txtaniversario'
                    type='text'
                    v-model='newRegistro.aniversario'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtclientetipo'
                    label='clientetipo'
                    :rules="[ v => !!v || 'clientetipo requerido']"
                    id='txtclientetipo'
                    type='text'
                    v-model='newRegistro.clientetipo'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtemail'
                    label='email'
                    :rules="[ v => !!v || 'email requerido']"
                    id='txtemail'
                    type='text'
                    v-model='newRegistro.email'
                    required></v-text-field>
                </v-flex>

              </v-layout>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <input type="hidden" id="registroKey">
            <v-btn color="blue darken-1" flat @click.native="close">Cancelar</v-btn>
            <v-btn id="btnNew" color="blue darken-1" flat @click.native="addRegistro">Incluir</v-btn>
            <v-btn id="btnUp"  class="btn--disabled" color="blue darken-1" flat @click.native="updatebtn">Atualizar</v-btn>
          </v-card-actions>
       </v-card>
     </v-dialog>
    </v-form>
      <v-card>
        <v-card-title>
          {{ titulo }}s cadastrados
          <v-spacer></v-spacer>
          <v-text-field
            append-icon="search"
            label="Pesquisar"
            single-line
            hide-details
            v-model="search"
          ></v-text-field>
        </v-card-title>
        <v-data-table
            :headers="headers"
            :items="registros"
            :search="search"
            item-key="codigo"
            class="elevation-1"
            rows-per-page-text= "Linhas por paginas"
          >
          <template slot="items" slot-scope="props">
              <td class='text-xs-left'>{{ props.item.codigo }}</td>
              <td class='text-xs-left'>{{ props.item.nome }}</td>
              <td class='text-xs-left'>{{ props.item.codnome }}</td>
              <td class='text-xs-left'>{{ props.item.limitecredito }}</td>
              <td class='text-xs-left'>{{ props.item.cpf }}</td>
              <td class='text-xs-left'>{{ props.item.identidade }}</td>
              <td class='text-xs-left'>{{ props.item.nascimento }}</td>
              <td class='text-xs-left'>{{ props.item.estcivil }}</td>
              <td class='text-xs-left'>{{ props.item.conjuge }}</td>
              <td class='text-xs-left'>{{ props.item.codnomeconjuge }}</td>
              <td class='text-xs-left'>{{ props.item.pai }}</td>
              <td class='text-xs-left'>{{ props.item.mae }}</td>
              <td class='text-xs-left'>{{ props.item.endereco1 }}</td>
              <td class='text-xs-left'>{{ props.item.complemento }}</td>
              <td class='text-xs-left'>{{ props.item.cidade }}</td>
              <td class='text-xs-left'>{{ props.item.uf }}</td>
              <td class='text-xs-left'>{{ props.item.fone }}</td>
              <td class='text-xs-left'>{{ props.item.empresa }}</td>
              <td class='text-xs-left'>{{ props.item.endereco }}</td>
              <td class='text-xs-left'>{{ props.item.fonetrab }}</td>
              <td class='text-xs-left'>{{ props.item.observacao }}</td>
              <td class='text-xs-left'>{{ props.item.sigla }}</td>
              <td class='text-xs-left'>{{ props.item.tipocredito }}</td>
              <td class='text-xs-left'>{{ props.item.anonasc }}</td>
              <td class='text-xs-left'>{{ props.item.aniversario }}</td>
              <td class='text-xs-left'>{{ props.item.clientetipo }}</td>
              <td class='text-xs-left'>{{ props.item.email }}</td>

              <v-btn icon class="mx-0" @click="updateRegistro(props.item)">
                <v-icon color="teal">edit</v-icon>
              </v-btn>
              <v-btn icon class="mx-0" @click="removeRegistro(props.item)">
                <v-icon color="pink">delete</v-icon>
              </v-btn>
            </td>
          </template>
          <template slot="pageText" slot-scope="props">
            Linhas {{ props.pageStart }} - {{ props.pageStop }} de {{ props.itemsLength }}
          </template>
          <v-alert slot="no-results" :value="true" color="error" icon="warning">
            Sua pesquisa por "{{ search }}" não encontrou resultados.
          </v-alert>
        </v-data-table>
      </v-card>
  </div>
</template>
<script>
  import Dataset from '../components/Datasetrest'
  export default {
    extends: Dataset,
    data: function () {
      return {
        headers: [
          { text: 'codigo', align: 'left', value: 'codigo' },
          { text: 'nome', align: 'left', value: 'nome' },
          { text: 'codnome', align: 'left', value: 'codnome' },
          { text: 'limitecredito', align: 'left', value: 'limitecredito' },
          { text: 'cpf', align: 'left', value: 'cpf' },
          { text: 'identidade', align: 'left', value: 'identidade' },
          { text: 'nascimento', align: 'left', value: 'nascimento' },
          { text: 'estcivil', align: 'left', value: 'estcivil' },
          { text: 'conjuge', align: 'left', value: 'conjuge' },
          { text: 'codnomeconjuge', align: 'left', value: 'codnomeconjuge' },
          { text: 'pai', align: 'left', value: 'pai' },
          { text: 'mae', align: 'left', value: 'mae' },
          { text: 'endereco1', align: 'left', value: 'endereco1' },
          { text: 'complemento', align: 'left', value: 'complemento' },
          { text: 'cidade', align: 'left', value: 'cidade' },
          { text: 'uf', align: 'left', value: 'uf' },
          { text: 'fone', align: 'left', value: 'fone' },
          { text: 'empresa', align: 'left', value: 'empresa' },
          { text: 'endereco', align: 'left', value: 'endereco' },
          { text: 'fonetrab', align: 'left', value: 'fonetrab' },
          { text: 'observacao', align: 'left', value: 'observacao' },
          { text: 'sigla', align: 'left', value: 'sigla' },
          { text: 'tipocredito', align: 'left', value: 'tipocredito' },
          { text: 'anonasc', align: 'left', value: 'anonasc' },
          { text: 'aniversario', align: 'left', value: 'aniversario' },
          { text: 'clientetipo', align: 'left', value: 'clientetipo' },
          { text: 'email', align: 'left', value: 'email' }
        ],
        newRegistro: {
          codigo: '',
          nome: '',
          codnome: '',
          limitecredito: '',
          cpf: '',
          identidade: '',
          nascimento: '',
          estcivil: '',
          conjuge: '',
          codnomeconjuge: '',
          pai: '',
          mae: '',
          endereco1: '',
          complemento: '',
          cidade: '',
          uf: '',
          fone: '',
          empresa: '',
          endereco: '',
          fonetrab: '',
          observacao: '',
          sigla: '',
          tipocredito: '',
          anonasc: '',
          aniversario: '',
          clientetipo: '',
          email: ''
        },
        nometabela: 'cliente',
        titulo: 'cliente'
      }
    }
  }
</script>
