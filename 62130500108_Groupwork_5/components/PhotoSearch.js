app.component('photosearch', {
    props: {
        search: Object,
    },
    data() {
        return {
            searchtext: '',
        }
    },
    template:
        /*html*/
        `
        <div class="">
            <div class="flex justify-center cursor-pointer">
                <div v-on:click="togglesearchon()" v-show="search.searchOn"
                    class="p-1 bg-gray-100 rounded-lg hover:bg-gray-300 ">
                    <div class=" ">
                        <span class="material-icons md-48">
                            search
                        </span>
                    </div>
                </div>
                <input v-model="searchtext" v-show="search.searchBar"
                    class="text-center border border-transparent focus:ring-2 w-1/3 bg-gray-100 rounded-l-lg"
                    placeholder="  Search Here !!!" />
                <div v-on:click="togglesearchoff()" v-show="search.searchBar"
                    class="p-1 bg-red-500 rounded-r-lg hover:bg-red-300 transition duration-500">
                    cancel
                </div>
            </div>
            <div class="grid justify-items-center space-y-4">
                <div v-show="search.havetext">Search Results : {{searchtext}}</div>
                <div v-show="search.haveResult" class="text-5xl bg-gray-100 p-2 rounded-lg shadow-inner">NO FOUND</div>
            </div>
        </div>
        `,
    methods: {
        togglesearchon() {
            this.$emit('searchon')
        },
        togglesearchoff() {
            this.$emit('searchoff')
        },
    },
    watch: {
        searchtext: function () {
            this.$emit('searched', this.searchtext)
            this.$emit('callingfilter')
        }
    }
})