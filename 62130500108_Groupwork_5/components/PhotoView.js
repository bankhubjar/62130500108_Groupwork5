app.component('photoview', {
    props: {
        viewpic: Object
    },
    template:
        /*html*/
        `
    <div class="flex justify-center">
            <div v-show="viewpic.showviewpic"
                class="flex justify-center text-center bg-black bg-opacity-80 py-28 px-80 fixed w-max">
                <div v-on:click="beforeview()" 
                    class="self-center bg-gray-200 bg-gray-200 py-7 cursor-pointer rounded-l-lg transition duration-500 hover:bg-gray-500">
                    <span class="material-icons">
                        navigate_before
                    </span>
                </div>
                <div class="w-3/4 ">
                    <div v-on:click="toggleviewoff()"
                        class="cursor-pointer bg-red-500 rounded-t-lg hover:bg-red-300 transition duration-500">
                        <span class="material-icons md-48">
                            close
                        </span>
                    </div>
                    <img class="" v-bind:src="viewpic.src" v-on:click.left="beforeview()" v-on:click.right="nextview()">
                    <div v-on:click="togglelike(viewpic.text)"
                        :class="[viewpic.like ? 'bg-pink-300 hover:bg-pink-400 rounded-b-lg cursor-pointer transition duration-500':'bg-gray-100 hover:bg-pink-400 rounded-b-lg cursor-pointer transition duration-500']">
                        <p class="text-2xl overflow-clip z-1">
                            <a v-show="viewpic.like" class="text-white"><i class="material-icons">favorite</i></a>
                            {{viewpic.text}}
                            <a v-show="viewpic.like" class="text-white"><i class="material-icons">favorite</i></a>
                        </p>
                    </div>
                </div>
                <div v-on:click="nextview()"
                    class="self-center bg-gray-200 bg-gray-200 py-7 cursor-pointer rounded-r-lg transition duration-500 hover:bg-gray-500">
                    <span class="material-icons">
                        navigate_next
                    </span>
                </div>
            </div>
    </div>
    `,
    methods: {
        beforeview() {
            this.$emit('before')
        },
        nextview() {
            this.$emit('next')
        },
        togglelike(text){
            this.$emit('like',text)
        },
        toggleviewoff(){
            this.$emit('viewoff')
        }
    }
})