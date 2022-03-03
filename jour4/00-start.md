# information des composants 

useState() => locale au composant

passer des informations => props 
fonctionne que entre des composants liés Parent / Enfant

limite pas idéal pour passer des informations entre des composants Frères / Cousins ...

## gestionnaire centralisé de state 

mettre une partie des data globales de l'application dans zone globales dans React 

## historiquement => Redux 

## ajout de hook useContext / useReducer / useEffect 

store () / context() => stoker l'information entre tous les composants

action => object { type:"action ?" , payload : "données pour le store" }

reducer => fonction 
    -- Redux => store = createStore(reducer)
    -- react hook => useReducer(reducer , etat_inital)

état_initial = []

function reducer( state = etat_inital , action){
    switch(){
        case : 
        default :
            return state
    }
}

react hook = dispatch(action) envoyer des informations du composant => store
redux => useDispatch()

react hook useContext()
Redux => redux => useSelector()


=> deux librairies react / redux 