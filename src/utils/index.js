export function loadSpinner(){
    document.getElementById('show-spinner').style.display = " block";
  }

  export function unloadSpinner(){
    document.getElementById('show-spinner').style.display = " none";
  }

  export function unloadToast(){
    setTimeout(()=>{
          this.type = null
          this.message = null
        }, 6000)
  }
  export function loadToast(msg, toast_type){
    this.show = true
    this.message = msg
    this.type = toast_type
  }
