import { observable, action } from 'mobx';

export default class YourStore {
    @observable yangStore = 'hello';
    // observable은 변수, 즉 멤버를 설정할때 사용하는 const, let같은 개념

    @action changeStoreValue = value => {
        this.yangStore = value;
    };
    // action은 값을 변경하는 메소드, setState같은 역할.

    @action changeToWorld = () => {
        this.yangStore = "World";
    };
};