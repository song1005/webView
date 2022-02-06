/**
 * enum class
 */
//sort calss
const DataSort = {
    page: Symbol('page'),
    data: Symbol('data')
}

/**
 * base data class
 */
class ViewHolderData {

}

/**
 * 목차 객체
 */
class TocData extends ViewHolderData {

    /**
     * 
     * @param {*} id 식별자
     * @param {*} title 제목
     * @param {*} dept 깊이
     * @param {*} page 페이지
     */
    constructor(id , title, dept , page){
        this.id = id;
        this.title = title;
        this.dept = dept;
        this.page = page;
        this.pageSuffix = "%";
        this.isActive = false;
    }
}

/**
 * 북마크 객체
 */
class BookMarkData extends ViewHolderData {

    /**
     * 
     * @param {*} id 식별자
     * @param {*} title 제목
     * @param {*} contents 내용
     * @param {*} page 페이지
     * @param {*} date 날짜.
     * @param {*} start 시작 cfi or xpath.
     * @param {*} end 끝 cfi or xpath
     * @param {*} startOffset 날짜.
     * @param {*} endOffset 끝 cfi or xpath offset
     */
    constructor(id , title , contents , page , date , start , end , startOffset , endOffset){
        this.id = id;
        this.title = title;
        this.contents = contents;
        this.page = page;
        this.pageSuffix = "%";
        this.status = "D";
        this.date = date;
        this.start = start;
        this.end = end;
        this.startOffset = startOffset;
        this.endOffset = endOffset;
    }
}

/**
 * 검색결과 객체
 */
class SearchResultData extends ViewHolderData {
    constructor(id , title , contents , page , start , end , startOffset , endOffset){
        this.id = id;
        this.title = title;
        this.contents = contents;
        this.page = page;
        this.pageSuffix = "%";
        this.start = start;
        this.end = end;
        this.startOffset = startOffset;
        this.endOffset = endOffset;
    }

}


/**
 * 테마 객체
 */
class ThemeColor {
    /**
     * @param {*} name 이름
     * @param {*} backColor 배경색
     * @param {*} textColor 텍스트 색깔.
     */
    constructor(name, backColor, textColor){
        this.name = name;
        this.backColor = backColor;
        this.textColor = textColor;
    }
}

/**
 * 뷰어 세팅 객체 
 */
class ViewerSetting {
    /**
     * @param {*} id 식별자
     * @param {*} name 이름
     * @param {*} defaultValue 기본값
     * @param {*} current 현재값
     * @param {*} list list<{*}>
     * @param {*} type 뷰타입
     */
    constructor(id , name, defaultValue, current, list, type){
        this.id = id;
        this.name = name;
        this.defaultValue = defaultValue;
        this.current = current;
        this.list = list;
        this.type = type;
    }
}




