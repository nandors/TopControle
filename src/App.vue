<template>
  <v-app>
    <v-navigation-drawer v-model="drawer"
      dark
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      enable-resize-watcher
      fixed
      app
      >
        <v-card>
          <v-toolbar dark>
            <v-toolbar-title>
              <router-link to="/" tag="span" style="cursor: pointer">
                 {{ appTitle }}
              </router-link>
            </v-toolbar-title>
          </v-toolbar>
          <v-list>
            <v-list-group v-for="item in menuItem" :value="item.active" v-bind:key="item.title">
              <v-list-tile slot="item" @click="">
                <v-list-tile-action>
                  <v-icon>{{ item.action }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-icon>keyboard_arrow_down</v-icon>
                </v-list-tile-action>
              </v-list-tile>

              <v-list-tile
                v-for="subitem in item.items"
                :key="subitem.title"
                :to="subitem.path">
                <v-list-tile-action>
                  <v-icon>{{ subitem.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>{{ subitem.title }}</v-list-tile-content>
              </v-list-tile>
            </v-list-group>
          </v-list>
        </v-card>
        <v-list>
          <v-list-tile @click="userSignOut" v-if="isAuthenticated">
            <v-list-tile-action>
              <v-icon>exit_to_app</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>Sair</v-list-tile-content>
          </v-list-tile>
        </v-list>


    </v-navigation-drawer>


    <v-toolbar
      color="blue darken-3"
      dark
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-menu :nudge-width="100" :nudge-bottom="40" :open-on-hover="true">
        <v-toolbar-title slot="activator">
          <span>Cadastros</span>
          <v-icon dark>arrow_drop_down</v-icon>
        </v-toolbar-title>
        <v-list>
          <v-list-tile v-for="item in cadastroItems" :key="item.title" :to="item.path" @click="">
            <v-icon left>{{ item.icon }}</v-icon>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-menu :nudge-width="100" :nudge-bottom="40" :open-on-hover="true">
        <v-toolbar-title slot="activator">
          <span>Usuário</span>
          <v-icon dark>arrow_drop_down</v-icon>
        </v-toolbar-title>
        <v-list>
          <v-list-tile v-for="item in usuarioItems" :key="item.title" :to="item.path" @click="">
            <v-icon left>{{ item.icon }}</v-icon>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat @click="userSignOut" v-if="isAuthenticated">
          <v-icon left>exit_to_app</v-icon>
          Sair
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
        <v-container fluid>
          <router-view/>
        </v-container>
    </v-content>

  </v-app>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        // appTitle: 'Awesome App',
        sidebar: false,
        clipped: false,
        drawer: true,
        fixed: false,
        miniVariant: false,
        right: true,
        rightDrawer: false,
      }
    },
    computed: {
      appTitle () {
        return this.$store.getters.appTitle
      },
      isAuthenticated () {
        return this.$store.getters.getUser !== null && this.$store.getters.getUser !== undefined
      },
      usuarioItems () {
        if (this.isAuthenticated) {
          return [
            { title: 'Home', path: 'home', icon: 'home' },
          ]
        } else {
          return [
            { title: 'Cadastrar', path: 'signup', icon: 'face' },
            { title: 'Acessar', path: 'signin', icon: 'lock_open' }
          ]
        }
      },
      cadastroItems () {
        if (this.isAuthenticated) {
          return [
            { title: 'Book', path: 'book', icon: 'lock_open' },
            { title: 'Lojas', path: 'loja', icon: 'face' }

          ]
        } else {
          return [
          ]
        }
      },
      menuItem () {
        return [
           {
             action: 'local_activity',
             title: 'Cadastro',
             items:  this.cadastroItems
           },
           {
             action: 'restaurant',
             title: 'Usuário',
             items: this.usuarioItems
           },
           {
             action: 'school',
             title: 'Education',
             items: [
               { title: 'List Item' }
             ]
           },
           {
             action: 'directions_run',
             title: 'Family',
             items: [
               { title: 'List Item' }
             ]
           },
           {
             action: 'healing',
             title: 'Health',
             items: [
               { title: 'List Item' }
             ]
           },
           {
             action: 'content_cut',
             title: 'Office',
             items: [
               { title: 'List Item' }
             ]
           },
           {
             action: 'local_offer',
             title: 'Promotions',
             items: [
               { title: 'List Item' }
             ]
           }
         ]
      }
    },
    methods: {
      userSignOut () {
        this.$store.dispatch('userSignOut')
      }
    }
  }
</script>
