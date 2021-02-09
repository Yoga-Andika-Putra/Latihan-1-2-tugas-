Vue.component('showform', {
    template: '#show-form',
    data(){
        return {
            data: { nama: '', tempat: '', tinggi: '', alamat: '',
            telepon: '', golongan: '', kelamin: ''}
        }
    },
    methods: {
        simpan: function() {
            this.$emit('send-data', this.data);
            this.data.nama = "";
            this.data.tempat = "";
            this.data.tinggi = "";
            this.data.alamat = "";
            this.data.telepon = "";
            this.data.golongan = "";
            this.data.kelamin = "";
        }
    }
})

Vue.component('showdata', {
    template: '#show-data',
    props: ['data']
})

var app = new Vue({
    el: '#app',
    data: {
        biodata: {},
        
    },
    methods: {
        getData: function (value) {
            this.biodata = {
                nama : value.nama,
                tempat : value.tempat,
                tinggi : value.tinggi,
                alamat : value.alamat,
                telepon : value.telepon,
                golongan : value.golongan,
                kelamin : value.kelamin
            }
        }
    }
})
