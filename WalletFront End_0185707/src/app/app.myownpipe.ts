import {Pipe,PipeTransform} from '@angular/core'

@Pipe({
    name:'checkmyown'
})

export class MyPipe implements PipeTransform{

    transform(data:string,option:any){
        return data.concat('hello');
    }

}