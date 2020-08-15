import { observable, action } from 'mobx';

export default class {

    // 홈 커버 애니메이션 관련 state
    @observable coverUnwrapped = false;
    @action ifUnwrapped = () => this.coverUnwrapped = true;

    // ABOUT, CRAFT의 폰트 크기 관련 state
    @observable menuFontSize = 80;
    @observable arrowFontSize = 100;
    @action changeFontSize = isMobile => {
        if (isMobile) {
            this.menuFontSize = 60;
            this.arrowFontSize = 80;
        }
    };

    //ABOUT, CRAFT 각각 클릭 여부 관련 state
    @observable menuClicked = false;
    @observable about = false;
    @observable craft = false;
    @observable aniEnd = false;

    @action whatIsClicked = clickedThing => {
        this.menuClicked = true;
        // 둘 중 클릭된 메뉴만 true로 변경
        this[clickedThing] = true;
    };
    @action whenAniEnded = () => {
        this.aniEnd = true;
    };

    // about 위치 선정
    @observable aboutX = 0;
    @observable aboutY = 0;
    @observable aboutMoveX = 0;
    @observable aboutMoveY = 0;

    @action getAboutPos = (X, Y) => {
        this.aboutX = X;
        this.aboutY = Y;
    };
    @action getAboutMove = (X, Y) => {
        this.aboutMoveX = X;
        this.aboutMoveY = Y;
    };

    // craft 위치 선정
    @observable craftX = 0;
    @observable craftY = 0;
    @observable craftMoveX = 0;
    @observable craftMoveY = 0;

    @action getCraftPos = (X, Y) => {
        this.craftX = X;
        this.craftY = Y;
    };
    @action getCraftMove = (X, Y) => {
        this.craftMoveX = X;
        this.craftMoveY = Y;
    };
};