<template>
    <div class="header_container">
        <header class="header_shape">
            <a class="main_title a_no_text_decor white_link" href="/home">История ПС</a>
            <ul class="navigation">
                <li class="nav_link"><a class="a_no_text_decor white_link" href="/events">События</a></li>
                <li class="nav_link"><a class="a_no_text_decor white_link" href="/graduates">Выпускники</a></li>
            </ul>
            <nav class="navigation_adapt_block">
                <div id="menuToggle">
                    <input type="checkbox" />

                        <span></span>
                        <span></span>
                        <span></span>
    
                    <ul id="menu">
                        <a href="/events"><li>События</li></a>
                        <a href="/graduates"><li>Выпускники</li></a>
                    </ul>
                </div>
            </nav>
        </header>
    </div>
</template>

<script>

export default {
    data(){
        return{}
    }, 
    methods: {

    }
}
</script>
