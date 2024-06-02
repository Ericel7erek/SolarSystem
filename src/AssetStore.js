// AssetStore.js

import { createStore } from 'zustand/vanilla'


const assetsToLoad = [
      { type: 'texture', path: '/textures/2k_sun.jpg', id: 'sunTexture' },
      { type: 'texture', path: '/textures/2k_mercury.jpg', id: 'mercuryTexture' },
      { type: 'texture', path: '/textures/2k_earth_daymap.jpg', id: 'earthTexture' },
      { type: 'texture', path: '/textures/2k_venus_surface.jpg', id: 'venusTexture' },
      { type: 'texture', path: '/textures/2k_mars.jpg', id: 'marsTexture' },
      { type: 'texture', path: '/textures/2k_moon.jpg', id: 'moonTexture' },
      { type: 'texture', path: '/textures/chiseled-cobble-bl/chiseled-cobble_albedo.png', id: 'extraTexture' },
      { type: 'texture', path: '/textures/chiseled-cobble-bl/chiseled-cobble_normal-ogl.png', id: 'extraNormal' },
      { type: 'texture', path: '/textures/alien-panels-bl/alien-panels_albedo.png', id: 'nooboTexture' },
      { type: 'texture', path: '/textures/alien-panels-bl/alien-panels_normal-ogl.png', id: 'nooboNormal' },
      { type: 'cubeTexture', path: '/textures/Standard-Cube-Map (2)/', id: 'backgroundTexture', faces: ['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'] } 
    ]

const assetStore = createStore((set)=>({
    assetsToLoad,
    loadedAssets: {},
    addLoadedAsset: (asset, id)=> set((state)=>({
            loadedAssets:{
                ...state.loadedAssets,
                [id]: asset,
            }
    }))
}))
export default assetStore


