let CocktailState = {
  HomeCocktail: [],
  HomeCocktailBis: [],
  loading: false,
  error: false,
  Alc: [],
  AlcBis: [],
  AlcCat: [],
  AlcCatBis: [],
  Recent: [],
  RecentBis: [],
  Ig: [],
  IgBis: [],
  IgF: [],
  IgFBis: [],
  Cat: [],
  CatBis: [],
  SearchCat: [],
  SearchCatBis: [],
  Fig: [],
  FigBis: [],
  Cocktail: [],
  CocktailBis: [],
};

let StoreData = (state = CocktailState, action) => {
  switch (action.type) {
    case 'DATASTART':
      return Object.assign({}, state, {
        loading: true,
        error: false,
      });
    case 'DATACOCKTAIL':
      return Object.assign({}, state, {
        HomeCocktail: action.payload.data.drinks,
        HomeCocktailBis: action.payload.data.drinks,
        loading: false,
      });
    case 'AlcSucces':
      return Object.assign({}, state, {
        Alc: action.payload.data.drinks,
        AlcBis: action.payload.data.drinks,
      });
    case 'AlcError':
      return Object.assign({}, state, {
        loading: false,
        error: action.payload.data,
      });
    case 'CatSucces':
      return Object.assign({}, state, {
        loading: false,
        AlcCat: action.payload.data,
        AlcCatBis: action.payload.data,
      });
    case 'TopSucces':
      return Object.assign({}, state, {
        loading: false,
        Recent: action.payload.data,
        RecentBis: action.payload.data,
      });
    case 'IGSUCCES':
      return Object.assign({}, state, {
        loading: false,
        IgBis: action.payload.data,
        Ig: action.payload.data,
      });
    case 'FIGSUCCES':
      return Object.assign({}, state, {
        loading: false,
        IgF: action.payload.data.drinks,
        IgFBis: action.payload.data.drinks,
      });
    case 'CATBISSUCCES':
      return Object.assign({}, state, {
        Cat: action.payload.data.drinks,
        CatBis: action.payload.data.drinks,
      });
    case 'CATBISERROR':
      return Object.assign({}, state, {
        error: action.payload.data,
      });
    case 'FILTERCAT':
      return Object.assign({}, state, {
        loading: false,
        Cat: action.payload.data,
        CatBis: action.payload.data,
      });
    case 'SEARCHCAT':
      let data = state.Cat.slice();
      let f = data.filter((p) =>
        p.strDrink.toLowerCase().includes(action.payload.data.toLowerCase())
      );
      return Object.assign({}, state, {
        loading: false,
        CatBis: f,
      });
    case 'SEARCHCATBIS':
      return Object.assign({}, state, {
        loading: false,
        SearchCat: action.payload.data.drinks,
        SearchCatBis: action.payload.data.drinks,
      });
    case 'SEARCHCATERROR':
      return Object.assign({}, state, {
        loading: false,
        error: action.payload.data,
      });
    case 'FETCHIGBIS':
      return Object.assign({}, state, {
        Fig: action.payload.data,
        FigBis: action.payload.data,
      });
    case 'FETCHIGBISERROR':
      return Object.assign({}, state, {
        error: action.payload.data,
        loading: false,
      });
    case 'COCKTAIL':
      return Object.assign({}, state, {
        Cocktail: action.payload.data.drinks,
        CocktailBis: action.payload.data.drinks,
      });
    case 'COCKTAILERROR':
      return Object.assign({}, state, {
        error: action.payload.data,
      });

    default:
      break;
  }
  return state;
};

export default StoreData;
