<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{ sale: theme === 'sale', Ad: theme === 'Ad'}">
            <!-- her får vi slot innhold fra root -->
            <slot>default content</slot>
            <div class="actions">
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>


<script>
//sender med 'header' prop fra root modal med en verdi. som variabel
export default {
    props: ['theme'],
    methods: {
        closeModal(){
            this.$emit('close')
        }
    }
}

</script>

<!-- scoped i style tag betyr at style bare endrer på dette dokumentet -->
<style> 
    .modal{
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
    }
    .backdrop{
        top: 0;
        position: fixed;
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
    }
    /* kan alternativt spesifisere for bedre ytelse */
    .modal h1{
        color: #03cfb4;
    }
    .modal p{
        font-style: normal;
    }

    .modal .actions{
        text-align: center;
        margin: 30px 0 10px 0;
    }
    .modal .actions a {
        color: #333;
        padding: 8px;
        border: 1px solid #eee;
        text-decoration: none;
        margin: 10px;
    }

    .modal.sale{
        background: crimson;
        color: white;
    }
    .modal.sale h1{
        color:white;
    }
    .modal.sale .actions {
        color:white;
    }
    .modal.sale .actions a{
        color: white
    }
    
    .modal.Ad {
        background: yellow;
        color: #333;
    }
    .modal.Ad h1{
        color: #333;
    }
    .modal.Ad .actions a{
        color: #333;
        background: white;
    }
</style>