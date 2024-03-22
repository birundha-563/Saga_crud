import {all} from 'redux-saga/effects'
import StudentWatcherSaga from './sagareducer/Sagareducer';

 function* rootsaga(){
    yield all([ StudentWatcherSaga()])

}
export default rootsaga;