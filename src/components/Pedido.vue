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
                    name='txtencomendado'
                    label='encomendado'
                    :rules="[ v => !!v || 'encomendado requerido']"
                    id='txtencomendado'
                    type='text'
                    v-model='newRegistro.encomendado'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtdata'
                    label='data'
                    :rules="[ v => !!v || 'data requerido']"
                    id='txtdata'
                    type='text'
                    v-model='newRegistro.data'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtentrega'
                    label='entrega'
                    :rules="[ v => !!v || 'entrega requerido']"
                    id='txtentrega'
                    type='text'
                    v-model='newRegistro.entrega'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtcolegio'
                    label='colegio'
                    :rules="[ v => !!v || 'colegio requerido']"
                    id='txtcolegio'
                    type='text'
                    v-model='newRegistro.colegio'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtqtd'
                    label='qtd'
                    :rules="[ v => !!v || 'qtd requerido']"
                    id='txtqtd'
                    type='text'
                    v-model='newRegistro.qtd'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtdescricao'
                    label='descricao'
                    :rules="[ v => !!v || 'descricao requerido']"
                    id='txtdescricao'
                    type='text'
                    v-model='newRegistro.descricao'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtunit'
                    label='unit'
                    :rules="[ v => !!v || 'unit requerido']"
                    id='txtunit'
                    type='text'
                    v-model='newRegistro.unit'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txttotal'
                    label='total'
                    :rules="[ v => !!v || 'total requerido']"
                    id='txttotal'
                    type='text'
                    v-model='newRegistro.total'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtpedidonr'
                    label='pedidonr'
                    :rules="[ v => !!v || 'pedidonr requerido']"
                    id='txtpedidonr'
                    type='text'
                    v-model='newRegistro.pedidonr'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtcortado'
                    label='cortado'
                    :rules="[ v => !!v || 'cortado requerido']"
                    id='txtcortado'
                    type='text'
                    v-model='newRegistro.cortado'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtpronto'
                    label='pronto'
                    :rules="[ v => !!v || 'pronto requerido']"
                    id='txtpronto'
                    type='text'
                    v-model='newRegistro.pronto'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtlocal'
                    label='local'
                    :rules="[ v => !!v || 'local requerido']"
                    id='txtlocal'
                    type='text'
                    v-model='newRegistro.local'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtentregue'
                    label='entregue'
                    :rules="[ v => !!v || 'entregue requerido']"
                    id='txtentregue'
                    type='text'
                    v-model='newRegistro.entregue'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtfone1'
                    label='fone1'
                    :rules="[ v => !!v || 'fone1 requerido']"
                    id='txtfone1'
                    type='text'
                    v-model='newRegistro.fone1'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtfone2'
                    label='fone2'
                    :rules="[ v => !!v || 'fone2 requerido']"
                    id='txtfone2'
                    type='text'
                    v-model='newRegistro.fone2'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtcamisa'
                    label='camisa'
                    :rules="[ v => !!v || 'camisa requerido']"
                    id='txtcamisa'
                    type='text'
                    v-model='newRegistro.camisa'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtrecebido'
                    label='recebido'
                    :rules="[ v => !!v || 'recebido requerido']"
                    id='txtrecebido'
                    type='text'
                    v-model='newRegistro.recebido'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtdatarecebido'
                    label='datarecebido'
                    :rules="[ v => !!v || 'datarecebido requerido']"
                    id='txtdatarecebido'
                    type='text'
                    v-model='newRegistro.datarecebido'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtareceber'
                    label='areceber'
                    :rules="[ v => !!v || 'areceber requerido']"
                    id='txtareceber'
                    type='text'
                    v-model='newRegistro.areceber'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txttotalgera'
                    label='totalgera'
                    :rules="[ v => !!v || 'totalgera requerido']"
                    id='txttotalgera'
                    type='text'
                    v-model='newRegistro.totalgera'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtvendedor'
                    label='vendedor'
                    :rules="[ v => !!v || 'vendedor requerido']"
                    id='txtvendedor'
                    type='text'
                    v-model='newRegistro.vendedor'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtfoto'
                    label='foto'
                    :rules="[ v => !!v || 'foto requerido']"
                    id='txtfoto'
                    type='text'
                    v-model='newRegistro.foto'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtprodutserv'
                    label='produtserv'
                    :rules="[ v => !!v || 'produtserv requerido']"
                    id='txtprodutserv'
                    type='text'
                    v-model='newRegistro.produtserv'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtcliente'
                    label='cliente'
                    :rules="[ v => !!v || 'cliente requerido']"
                    id='txtcliente'
                    type='text'
                    v-model='newRegistro.cliente'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtstatus'
                    label='status'
                    :rules="[ v => !!v || 'status requerido']"
                    id='txtstatus'
                    type='text'
                    v-model='newRegistro.status'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtentregueem'
                    label='entregueem'
                    :rules="[ v => !!v || 'entregueem requerido']"
                    id='txtentregueem'
                    type='text'
                    v-model='newRegistro.entregueem'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtsilk'
                    label='silk'
                    :rules="[ v => !!v || 'silk requerido']"
                    id='txtsilk'
                    type='text'
                    v-model='newRegistro.silk'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtestampa'
                    label='estampa'
                    :rules="[ v => !!v || 'estampa requerido']"
                    id='txtestampa'
                    type='text'
                    v-model='newRegistro.estampa'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtbordado'
                    label='bordado'
                    :rules="[ v => !!v || 'bordado requerido']"
                    id='txtbordado'
                    type='text'
                    v-model='newRegistro.bordado'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtmalha'
                    label='malha'
                    :rules="[ v => !!v || 'malha requerido']"
                    id='txtmalha'
                    type='text'
                    v-model='newRegistro.malha'
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
                    name='txtdesconto'
                    label='desconto'
                    :rules="[ v => !!v || 'desconto requerido']"
                    id='txtdesconto'
                    type='text'
                    v-model='newRegistro.desconto'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtlocalidade'
                    label='localidade'
                    :rules="[ v => !!v || 'localidade requerido']"
                    id='txtlocalidade'
                    type='text'
                    v-model='newRegistro.localidade'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtlojas'
                    label='lojas'
                    :rules="[ v => !!v || 'lojas requerido']"
                    id='txtlojas'
                    type='text'
                    v-model='newRegistro.lojas'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtlocolizacao'
                    label='locolizacao'
                    :rules="[ v => !!v || 'locolizacao requerido']"
                    id='txtlocolizacao'
                    type='text'
                    v-model='newRegistro.locolizacao'
                    required></v-text-field>
                </v-flex>

                <v-flex xs12 sm4 md4>
                  <v-text-field
                    name='txtprontoem'
                    label='prontoem'
                    :rules="[ v => !!v || 'prontoem requerido']"
                    id='txtprontoem'
                    type='text'
                    v-model='newRegistro.prontoem'
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
              <td class='text-xs-left'>{{ props.item.encomendado }}</td>
              <td class='text-xs-left'>{{ props.item.data }}</td>
              <td class='text-xs-left'>{{ props.item.entrega }}</td>
              <td class='text-xs-left'>{{ props.item.colegio }}</td>
              <td class='text-xs-left'>{{ props.item.qtd }}</td>
              <td class='text-xs-left'>{{ props.item.descricao }}</td>
              <td class='text-xs-left'>{{ props.item.unit }}</td>
              <td class='text-xs-left'>{{ props.item.total }}</td>
              <td class='text-xs-left'>{{ props.item.pedidonr }}</td>
              <td class='text-xs-left'>{{ props.item.cortado }}</td>
              <td class='text-xs-left'>{{ props.item.pronto }}</td>
              <td class='text-xs-left'>{{ props.item.local }}</td>
              <td class='text-xs-left'>{{ props.item.entregue }}</td>
              <td class='text-xs-left'>{{ props.item.fone1 }}</td>
              <td class='text-xs-left'>{{ props.item.fone2 }}</td>
              <td class='text-xs-left'>{{ props.item.camisa }}</td>
              <td class='text-xs-left'>{{ props.item.recebido }}</td>
              <td class='text-xs-left'>{{ props.item.datarecebido }}</td>
              <td class='text-xs-left'>{{ props.item.areceber }}</td>
              <td class='text-xs-left'>{{ props.item.totalgera }}</td>
              <td class='text-xs-left'>{{ props.item.vendedor }}</td>
              <td class='text-xs-left'>{{ props.item.foto }}</td>
              <td class='text-xs-left'>{{ props.item.produtserv }}</td>
              <td class='text-xs-left'>{{ props.item.cliente }}</td>
              <td class='text-xs-left'>{{ props.item.status }}</td>
              <td class='text-xs-left'>{{ props.item.entregueem }}</td>
              <td class='text-xs-left'>{{ props.item.silk }}</td>
              <td class='text-xs-left'>{{ props.item.estampa }}</td>
              <td class='text-xs-left'>{{ props.item.bordado }}</td>
              <td class='text-xs-left'>{{ props.item.malha }}</td>
              <td class='text-xs-left'>{{ props.item.sigla }}</td>
              <td class='text-xs-left'>{{ props.item.desconto }}</td>
              <td class='text-xs-left'>{{ props.item.localidade }}</td>
              <td class='text-xs-left'>{{ props.item.lojas }}</td>
              <td class='text-xs-left'>{{ props.item.locolizacao }}</td>
              <td class='text-xs-left'>{{ props.item.prontoem }}</td>

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
            Sua pesquisa por "{{ search }}" n�o encontrou resultados.
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
          { text: 'encomendado', align: 'left', value: 'encomendado' },
          { text: 'data', align: 'left', value: 'data' },
          { text: 'entrega', align: 'left', value: 'entrega' },
          { text: 'colegio', align: 'left', value: 'colegio' },
          { text: 'qtd', align: 'left', value: 'qtd' },
          { text: 'descricao', align: 'left', value: 'descricao' },
          { text: 'unit', align: 'left', value: 'unit' },
          { text: 'total', align: 'left', value: 'total' },
          { text: 'pedidonr', align: 'left', value: 'pedidonr' },
          { text: 'cortado', align: 'left', value: 'cortado' },
          { text: 'pronto', align: 'left', value: 'pronto' },
          { text: 'local', align: 'left', value: 'local' },
          { text: 'entregue', align: 'left', value: 'entregue' },
          { text: 'fone1', align: 'left', value: 'fone1' },
          { text: 'fone2', align: 'left', value: 'fone2' },
          { text: 'camisa', align: 'left', value: 'camisa' },
          { text: 'recebido', align: 'left', value: 'recebido' },
          { text: 'datarecebido', align: 'left', value: 'datarecebido' },
          { text: 'areceber', align: 'left', value: 'areceber' },
          { text: 'totalgera', align: 'left', value: 'totalgera' },
          { text: 'vendedor', align: 'left', value: 'vendedor' },
          { text: 'foto', align: 'left', value: 'foto' },
          { text: 'produtserv', align: 'left', value: 'produtserv' },
          { text: 'cliente', align: 'left', value: 'cliente' },
          { text: 'status', align: 'left', value: 'status' },
          { text: 'entregueem', align: 'left', value: 'entregueem' },
          { text: 'silk', align: 'left', value: 'silk' },
          { text: 'estampa', align: 'left', value: 'estampa' },
          { text: 'bordado', align: 'left', value: 'bordado' },
          { text: 'malha', align: 'left', value: 'malha' },
          { text: 'sigla', align: 'left', value: 'sigla' },
          { text: 'desconto', align: 'left', value: 'desconto' },
          { text: 'localidade', align: 'left', value: 'localidade' },
          { text: 'lojas', align: 'left', value: 'lojas' },
          { text: 'locolizacao', align: 'left', value: 'locolizacao' },
          { text: 'prontoem', align: 'left', value: 'prontoem' }
        ],
        newRegistro: {
          codigo: '',
          nome: '',
          encomendado: '',
          data: '',
          entrega: '',
          colegio: '',
          qtd: '',
          descricao: '',
          unit: '',
          total: '',
          pedidonr: '',
          cortado: '',
          pronto: '',
          local: '',
          entregue: '',
          fone1: '',
          fone2: '',
          camisa: '',
          recebido: '',
          datarecebido: '',
          areceber: '',
          totalgera: '',
          vendedor: '',
          foto: '',
          produtserv: '',
          cliente: '',
          status: '',
          entregueem: '',
          silk: '',
          estampa: '',
          bordado: '',
          malha: '',
          sigla: '',
          desconto: '',
          localidade: '',
          lojas: '',
          locolizacao: '',
          prontoem: ''
        },
        nometabela: 'Pedido',
        titulo: 'Pedido'
      }
    }
  }
</script>
