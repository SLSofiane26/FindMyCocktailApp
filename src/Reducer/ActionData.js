import Axios from '../AxiosInstance';

export let TopCocktail = () => async (dispatch, getState) => {
  dispatch({ type: 'DATASTART' });
  await Axios.get('/randomselection.php')
    .then((res) =>
      dispatch({
        type: 'DATACOCKTAIL',
        payload: {
          data: res.data,
        },
      })
    )
    .catch((err) =>
      dispatch({
        type: 'DATAREMOVECOCKTAIL',
        payload: {
          data: err,
        },
      })
    );
};

export let FetchAlc = () => async (dispatch) => {
  dispatch({
    type: 'DATASTART',
  });
  await Axios({
    method: 'GET',
    url: 'list.php',
    params: {
      a: 'list',
    },
  })
    .then((res) => dispatch({ type: 'AlcSucces', payload: { data: res.data } }))
    .catch((err) => dispatch({ type: 'AlcError', payload: { data: err } }));
};
export let FetchCat = () => async (dispatch, getState) => {
  dispatch({
    type: 'DATASTART',
  });
  await Axios({
    method: 'GET',
    url: 'list.php',
    params: {
      c: 'list',
    },
  })
    .then((res) =>
      dispatch({ type: 'CatSucces', payload: { data: res.data.drinks } })
    )
    .catch((err) => dispatch({ type: 'AlcError', payload: { data: err } }));
};

export let FetchTop = () => async (dispatch, getState) => {
  dispatch({
    type: 'DATASTART',
  });
  await Axios({
    method: 'GET',
    url: 'latest.php',
  })
    .then((res) =>
      dispatch({ type: 'TopSucces', payload: { data: res.data.drinks } })
    )
    .catch((err) => dispatch({ type: 'AlcError', payload: { data: err } }));
};

export let Ig = () => async (dispatch, getState) => {
  dispatch({
    type: 'DATASTART',
  });
  await Axios({
    method: 'GET',
    url: 'list.php',
    params: {
      i: 'list',
    },
  })
    .then((res) =>
      dispatch({ type: 'IGSUCCES', payload: { data: res.data.drinks } })
    )
    .catch((err) => dispatch({ type: 'AlcError', payload: { data: err } }));
};

export let FetchIg = (items) => async (dispatch, getState) => {
  dispatch({
    type: 'DATASTART',
  });
  await Axios({
    method: 'GET',
    url: 'filter.php',
    params: {
      i: items,
    },
  })
    .then((res) => {
      dispatch({ type: 'FIGSUCCES', payload: { data: res.data } });
    })
    .catch((err) => {
      console.error(err);
      dispatch({ type: 'AlcError', payload: { data: err } });
    });
};

export let FetchCatBis = (items) => async (dispatch, getState) => {
  dispatch({ type: 'DATASTART' });
  await Axios({
    method: 'GET',
    url: 'filter.php',
    params: {
      a: items,
    },
  })
    .then((res) =>
      dispatch({ type: 'CATBISSUCCES', payload: { data: res.data } })
    )
    .catch((err) => dispatch({ type: 'CATBISERROR', payload: { data: err } }));
};

export let FilterCat = (items) => async (dispatch, getState) => {
  let data = getState().data.CatBis.slice();
  dispatch({
    type: 'FILTERCAT',
    payload: {
      data:
        items === 'DESC'
          ? data.sort((a, b) => (a.strDrink < b.strDrink ? 1 : -1))
          : data.sort((a, b) => (a.strDrink < b.strDrink ? -1 : 1)),
    },
  });
};

export let SearchCat = (items) => async (dispatch, getState) => {
  dispatch({
    type: 'SEARCHCAT',
    payload: {
      data: items,
    },
  });
};

export let SearchCatBis = (items) => async (dispatch, getState) => {
  await Axios({
    method: 'GET',
    url: 'filter.php',
    params: {
      c: items,
    },
  })
    .then((res) =>
      dispatch({ type: 'SEARCHCATBIS', payload: { data: res.data } })
    )
    .catch((err) =>
      dispatch({ type: 'SEARCHCATERROR', payload: { data: err } })
    );
};
export let FetchIgBis = (data) => async (dispatch, getState) => {
  Axios({
    method: 'GET',
    url: 'search.php',
    params: {
      i: data,
    },
  })
    .then((res) =>
      dispatch({ type: 'FETCHIGBIS', payload: { data: res.data.ingredients } })
    )
    .catch((err) => dispatch({ type: 'FETCHIGERROR', payload: { data: err } }));
};
export let Cocktail = (items) => async (disptach, getState) => {
  await Axios({
    method: 'GET',
    url: 'lookup.php',
    params: {
      i: items,
    },
  })
    .then((res) => disptach({ type: 'COCKTAIL', payload: { data: res.data } }))
    .catch((err) => console.error(err));
};
