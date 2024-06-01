import assetStore from "./AssetStore";
export default class Preloader{
    constructor(){
        this.assetStore = assetStore
        this.overlay =document.querySelector('.overlay')
        this.loading =document.querySelector('.loading')
        this.start =document.querySelector('.start')
        this.assetStore.subscribe((state)=>{
            
            this.numberOfLoadedAssets = Object.keys(state.loadedAssets).length
            
            this.numberOfAssetsToLoad = state.assetsToLoad.length
            this.progress = this.numberOfLoadedAssets / this.numberOfAssetsToLoad
            this.progress = Math.trunc(this.progress*100)
            console.log(this.progress);
            document.querySelector('#progressPercentage').innerHTML = this.progress
            if(this.progress === 100){
                this.loading.classList.add('fade')
                setTimeout(() => {
                    this.ready()
                }, 1500);
            }
        })
    }
    ready(){
        this.loading.remove()
        this.start.style.display = 'inline'
        this.start.classList.add('fadeIn')
        this.start.addEventListener('click', () =>{
            this.overlay.classList.add('fade')
            this.start.classList.add('fadeOut')
            setTimeout(() => {
                this.overlay.remove()
                this.start.remove()
            }, 1200);
        },{once: true})
    }
}