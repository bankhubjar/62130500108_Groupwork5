app.component('photoitem',{
    props: {
        picsearch: Array
    },
    template: 
    /*html*/
    `
    <div class="grid justify-items-center space-y-4">
        <div class=" grid grid-cols-2">
            <ul v-for="(pic,index) in picsearch">
                <li :class="[pic.like ? 'group cursor-pointer shadow-inner flex bg-pink-300 hover:bg-pink-400 transition duration-500 rounded-lg m-4':'group cursor-pointer shadow-inner flex bg-gray-200 hover:bg-gray-400 transition duration-500 rounded-lg m-4']">
                    <img @dblclick="toggleview(pic.text)"
                        class="h-1/2 w-1/2 justify-start rounded-l-lg group-hover: transition duration-500" v-bind:src="pic.src">
                    <div class="grid text-center space-y-4 my-auto mx-auto">
                        <div class="">
                            <p class="text-2xl overflow-clip z-1">{{pic.text}}</p>
                        </div>
                        <div v-on:click="togglelike(pic.text)" :class="[pic.like ? 'text-white rounded-lg my-auto shadow-2xl ' : 'text-pink-200 my-auto rounded-lg shadow-2xl hover:bg-pink-400' ]">
                            <i class="material-icons">favorite</i>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    `,
    methods: {
        toggleview(text){
            this.$emit('viewpic',text)
        },
        togglelike(text){
            this.$emit('likepic',text)
        },
    },
})