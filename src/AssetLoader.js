import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'

import assetStore from './AssetStore.js'

export default class AssetLoader{
    constructor(){
        this.assetStore = assetStore.getState()

        this.assetsToLoad = this.assetStore.assetsToLoad
        this.addLoadedAsset = this.assetStore.addLoadedAsset
        

        this.initLoaders()
        this.startLoading()
    }
    initLoaders(){
        this.gltfLoader = new GLTFLoader();
        this.dracoLoader = new DRACOLoader()
        this.dracoLoader.setDecoderPath( '/draco/' )
        this.gltfLoader.setDRACOLoader(this.dracoLoader)
        this.textureLoader = new THREE.TextureLoader()
        this.cubeTextureLoader = new THREE.CubeTextureLoader()
    }

    startLoading() {
        this.assetsToLoad.forEach((asset) => {
            if (asset.type === 'texture') {
                this.textureLoader.load(asset.path, (loadedAsset)=>{
                    this.addLoadedAsset(loadedAsset, asset.id)
                })
            }
            if (asset.type === 'model') {
                this.gltfLoader.load(asset.path, (loadedAsset)=>{
                    this.addLoadedAsset(loadedAsset, asset.id)
                })
            }
            if (asset.type === 'cubeTexture') {
                this.cubeTextureLoader.setPath(asset.path);
                this.cubeTextureLoader.load(asset.faces, (loadedAsset) => {
                    this.addLoadedAsset(loadedAsset, asset.id);
            });}
        })
    }
}