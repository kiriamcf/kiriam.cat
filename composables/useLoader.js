import { ref, provide, inject, watch } from 'vue'

const LOADED = Symbol('loaded')

export function provideLoader() {
    const loaded = ref(false)
    provide(LOADED, loaded)

    return {
        loaded,
        markLoaded: () => { loaded.value = true },
    }
}

export function onLoaderFinished(callback) {
    watch(inject(LOADED), callback, { once: true })
}
