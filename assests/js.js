///////////////////WRAP/////////////////////
function flexWrap(){
    document.querySelector('.conteiner2').classList.add('wrap');
}

function WithoutFlexWrap(){
    document.querySelector('.conteiner2').classList.remove('wrap');
}
///////////////////FLEX FLOW/////////////////////////
function flexFlowRow(){
    document.querySelector('.conteiner3').classList.remove('withFlexFlowColumn');
    document.querySelector('.conteiner3').classList.add('withFlexFlowRow');
}

function flexFlowColumn(){
    document.querySelector('.conteiner3').classList.remove('withFlexFlowRow');
    document.querySelector('.conteiner3').classList.add('withFlexFlowColumn');
}
//////////////////////////FLEX DIRECTION//////////////////////////////////
function withFlexDirection(){
    document.querySelector('.conteiner4').classList.add('flexDirectionColumn');
}

function withOutFlexDirection(){
    document.querySelector('.conteiner4').classList.remove('flexDirectionColumn');
}

////////////////////////////////CONTROLE/////////////////////////////
function controleDirectionRow(){
    document.querySelector('.conteiner5').classList.remove('withFlexFlowColumn');
    document.querySelector('.conteiner5').classList.add('withFlexFlowRow');
}

function controleDirectionColumn(){
    document.querySelector('.conteiner5').classList.remove('withFlexFlowRow');
    document.querySelector('.conteiner5').classList.add('withFlexFlowColumn');
}

/////////////////////////CONTROLE JUSTIFY CONTENT//////////////////////////////////

function justifyCenter(){
    document.querySelector('.conteiner5').classList.remove('justifyStart');
    document.querySelector('.conteiner5').classList.remove('justifyEnd');
    document.querySelector('.conteiner5').classList.remove('justifyAround');
    document.querySelector('.conteiner5').classList.remove('justifyBetween');

    document.querySelector('.conteiner5').classList.add('justifyCenter');
};

function justifyStart(){
    document.querySelector('.conteiner5').classList.remove('justifyCenter');
    document.querySelector('.conteiner5').classList.remove('justifyEnd');
    document.querySelector('.conteiner5').classList.remove('justifyAround');
    document.querySelector('.conteiner5').classList.remove('justifyBetween');

    document.querySelector('.conteiner5').classList.add('justifyStart');
};

function justifyEnd(){
    document.querySelector('.conteiner5').classList.remove('justifyCenter');
    document.querySelector('.conteiner5').classList.remove('justifyStart');
    document.querySelector('.conteiner5').classList.remove('justifyAround');
    document.querySelector('.conteiner5').classList.remove('justifyBetween');

    document.querySelector('.conteiner5').classList.add('justifyEnd');
};

function justifyAround(){
    document.querySelector('.conteiner5').classList.remove('justifyCenter');
    document.querySelector('.conteiner5').classList.remove('justifyStart');
    document.querySelector('.conteiner5').classList.remove('justifyEnd');
    document.querySelector('.conteiner5').classList.remove('justifyBetween');

    document.querySelector('.conteiner5').classList.add('justifyAround');
};

function justifyBetween(){
    document.querySelector('.conteiner5').classList.remove('justifyCenter');
    document.querySelector('.conteiner5').classList.remove('justifyStart');
    document.querySelector('.conteiner5').classList.remove('justifyEnd');
    document.querySelector('.conteiner5').classList.remove('justifyAround');

    document.querySelector('.conteiner5').classList.add('justifyBetween');
};

/*******************************CONTROLE ALIGN ITEMS******************************* */

function alignCenter(){
    document.querySelector('.conteiner5').classList.remove('alignStart');
    document.querySelector('.conteiner5').classList.remove('alignEnd');

    document.querySelector('.conteiner5').classList.add('alignCenter');

};

function alignStart(){
    document.querySelector('.conteiner5').classList.remove('alignCenter');
    document.querySelector('.conteiner5').classList.remove('alignEnd');

    document.querySelector('.conteiner5').classList.add('alignStart');

};

function alignEnd(){
    document.querySelector('.conteiner5').classList.remove('alignCenter');
    document.querySelector('.conteiner5').classList.remove('alignStart');

    document.querySelector('.conteiner5').classList.add('alignEnd');

};