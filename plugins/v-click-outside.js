import Vue from 'vue'

Vue.directive('click-outside', {
    bind(el, binding, vnode){
        if(vnode.outsideListener) {
            document.removeEventListener('click', vnode.outsideListener)
        }

        vnode.outsideListener = e => {
            if(e.target === el || e.target.className.includes('ignore')) return
            binding.value()
        }

        document.addEventListener('click', vnode.outsideListener)
    }
})