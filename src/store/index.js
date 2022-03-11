import { createStore } from 'vuex'

export default createStore({
  state: () => ({
    patents: {
      year2016: {
        content: [
          {
            patentName: 'Fügen eines Anschlusselements mit einem Litzenleiter',
            patentNumber: 'DE 10 2016 124 583 B3',
            inventor: [
              {
                firstName: 'Oliver',
                lastName: 'Scharkowski'
              }
            ],
            status: [
              {
                patentGranted: true,
                date: '15.02.2018'
              },
              {
                patentPending: false,
                date: ''
              }
            ],
            patentRegisterURL:
              'https://register.dpma.de/DPMAregister/pat/register?AKZ=1020161245836&CURSOR=0',
            patentFullDownloadURL:
              'https://register.dpma.de/DPMAregister/pat/PatSchrifteneinsicht?docId=DE102016124583B3&page=1&dpi=300&lang=de&full=true',
            description:
              'Verbindung eines Litzenleiters mit einem Anschlussteil, mit einem Ende des Litzenleiters, und einem mit dem Ende des Litzenleiters stoffschlüssig verbundenen Anschlussteil, wobei eine Stirnseite des Endes des Litzenleiters mit dem Anschlussteil mittels Ultraschall verschweißt ist. Eine besonders gute Schweißnaht wird dadurch erreicht, dass das Ende des Litzenleiters mit dem einer Hülse zunächst mittels Ultraschallschweißen verschweißt ist.',
            drawings: 'http://placehold.jp/500x500.png'
          }
        ]
      },
      year2017: {},
      year2018: {},
      year2019: {}
    }
  }),
  mutations: {},
  actions: {},
  modules: {}
})
