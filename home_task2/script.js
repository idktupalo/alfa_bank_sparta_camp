class SuperArray{
    #x_pos_elem
    #x_pos_marker
    #y_pos_elem
    #y_pos_marker
    #elem

    constructor(n,m,obj){
        this.m=m
        this.n=n
        this.arr = this.getArr(n,m,obj.min,obj.max)
    }

    getArr(n,m,min,max){
        let arr = new Array(n)
        for(let i=0; i<arr.length; i++){
            arr[i]=new Array(m)
            for(let j=0; j<arr[i].length; j++){
                arr[i][j] = Math.floor(Math.random()*(max-min)+min)
            }
        }
        return arr
    }

    clear(direction,k){
        if (direction == 'row'){
            for(let j=0; j<this.m; j++){
                this.arr[k][j] = 0 
            }
        } else if (direction == 'column'){
            for(let i=0; i<this.n; i++){
                this.arr[i][k] = 0
            }
        }
    }

    setMarker(obj){
        this.x_pos_elem = obj.x
        this.y_pos_elem = obj.y
        this.elem = this.arr[this.x_pos_elem][this.y_pos_elem]
        this.x_pos_marker = obj.x
        this.y_pos_marker = obj.y
        this.arr[obj.x][obj.y] = '&'
      
    }

    goTo(obj1){
        this.arr[this.x_pos_marker][this.y_pos_marker] = this.elem
        this.x_pos_marker = obj1.x
        this.y_pos_marker = obj1.y
        this.elem = this.arr[this.x_pos_marker][this.y_pos_marker]
        this.arr[obj1.x][obj1.y] = '&'
    }

    shift(direction){
        this.arr[this.x_pos_marker][this.y_pos_marker] = this.elem
        if (direction=='left'){
            this.elem =  this.arr[this.x_pos_marker][this.y_pos_marker - 1]
            this.arr[this.x_pos_marker][this.y_pos_marker - 1] = '&'
            this.y_pos_marker -= 1
        } else if(direction =='right'){
            this.elem =  this.arr[this.x_pos_marker][this.y_pos_marker + 1]
            this.arr[this.x_pos_marker][this.y_pos_marker + 1] = '&'
            this.y_pos_marker += 1
        } else if (direction =='top'){
            this.elem =  this.arr[this.x_pos_marker - 1][this.y_pos_marker]
            this.arr[this.x_pos_marker - 1][this.y_pos_marker] = '&'
            this.x_pos_marker -= 1
        } else if (direction == 'bottom'){
            this.elem =  this.arr[this.x_pos_marker + 1][this.y_pos_marker]
            this.arr[this.x_pos_marker + 1][this.y_pos_marker] = '&'
            this.x_pos_marker += 1
        }
    }
}

SuperArray.prototype.render = function(separator){
    return this.arr.join(separator)
}

const newArr = new SuperArray(5,4,{min:10,max:15})

 console.log(newArr)
 console.log(newArr.clear('row',2))
 console.log(newArr.clear('column',2))
 console.log(newArr.setMarker({x:2,y:1}))
 console.log(newArr.goTo({x:2,y:2}))
 console.log(newArr.shift('left'))
 console.log(newArr.shift('top'))
 console.log(newArr.shift('right'))
 console.log(newArr.shift('bottom'))
 console.log(newArr.shift('right'))

 console.log(newArr.goTo({x:1,y:2}))
 console.log(newArr.render('|'))

