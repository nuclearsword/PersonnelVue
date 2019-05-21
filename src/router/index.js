import Vue from 'vue'
import Router from 'vue-router'
import PersonnelEditor from '@/components/personneleditor'
import PersonnelRecords from '@/components/personnelrecords'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'personneleditor',
      component: PersonnelEditor
    },
    {
      path: '/personnel-records',
      name: 'personnelrecords',
      component: PersonnelRecords
    }
  ]
})