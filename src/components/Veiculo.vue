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
                    name='txtveiculo'
                    label='veiculo'
                    :rules="[ v => !!v || 'veiculo requerido']"
                    id='txtveiculo'
                    type='text'
                    v-model='newRegistro.veiculo'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtanofab'
                    label='anofab'
                    :rules="[ v => !!v || 'anofab requerido']"
                    id='txtanofab'
                    type='text'
                    v-model='newRegistro.anofab'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtplaca'
                    label='placa'
                    :rules="[ v => !!v || 'placa requerido']"
                    id='txtplaca'
                    type='text'
                    v-model='newRegistro.placa'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtchassis'
                    label='chassis'
                    :rules="[ v => !!v || 'chassis requerido']"
                    id='txtchassis'
                    type='text'
                    v-model='newRegistro.chassis'
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
              <td class='text-xs-left'>{{ props.item.veiculo }}</td>
              <td class='text-xs-left'>{{ props.item.anofab }}</td>
              <td class='text-xs-left'>{{ props.item.placa }}</td>
              <td class='text-xs-left'>{{ props.item.chassis }}</td>

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
          { text: 'veiculo', align: 'left', value: 'veiculo' },
          { text: 'anofab', align: 'left', value: 'anofab' },
          { text: 'placa', align: 'left', value: 'placa' },
          { text: 'chassis', align: 'left', value: 'chassis' }
        ],
        newRegistro: {
          codigo: '',
          veiculo: '',
          anofab: '',
          placa: '',
          chassis: ''
        },
        nometabela: 'Veiculo',
        titulo: 'Veiculo'
      }
    }
  }
</script>
