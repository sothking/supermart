import newaxios from './newaxios';

export function homeBanner(){
    return newaxios.post('/index.php/Ucenter/index/api')
}