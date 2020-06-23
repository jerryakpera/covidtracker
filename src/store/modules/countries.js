const axios = require("axios");
const countriesAxios = axios.create({
  baseURL: "https://api.covid19api.com"
});

// https://api.covid19api.com/dayone/country/kenya

const countryDetailAxios = axios.create({
  baseURL: "https://restcountries.eu/rest/v2/name"
});

const state = {
  tempCountries: [{
      Country: "Afghanistan",
      CountryCode: "AF",
      Slug: "afghanistan",
      NewConfirmed: 546,
      TotalConfirmed: 28424,
      NewDeaths: 21,
      TotalDeaths: 569,
      NewRecovered: 330,
      TotalRecovered: 8292,
      Date: "2020-06-21T08:15:11Z"
    },
    {
      Country: "Japan",
      CountryCode: "JP",
      Slug: "japan",
      NewConfirmed: 67,
      TotalConfirmed: 17725,
      NewDeaths: 4,
      TotalDeaths: 955,
      NewRecovered: 104,
      TotalRecovered: 15948,
      Date: "2020-06-21T10:35:15Z"
    },
    {
      Country: "Albania",
      CountryCode: "AL",
      Slug: "albania",
      NewConfirmed: 53,
      TotalConfirmed: 1891,
      NewDeaths: 1,
      TotalDeaths: 43,
      NewRecovered: 12,
      TotalRecovered: 1126,
      Date: "2020-06-21T08:15:11Z"
    },
    {
      Country: "Algeria",
      CountryCode: "DZ",
      Slug: "algeria",
      NewConfirmed: 127,
      TotalConfirmed: 11631,
      NewDeaths: 12,
      TotalDeaths: 837,
      NewRecovered: 128,
      TotalRecovered: 8324,
      Date: "2020-06-21T08:15:11Z"
    },
    {
      Country: "Andorra",
      CountryCode: "AD",
      Slug: "andorra",
      NewConfirmed: 0,
      TotalConfirmed: 855,
      NewDeaths: 0,
      TotalDeaths: 52,
      NewRecovered: 0,
      TotalRecovered: 792,
      Date: "2020-06-21T08:15:11Z"
    },
    {
      Country: "Angola",
      CountryCode: "AO",
      Slug: "angola",
      NewConfirmed: 4,
      TotalConfirmed: 176,
      NewDeaths: 1,
      TotalDeaths: 9,
      NewRecovered: 0,
      TotalRecovered: 66,
      Date: "2020-06-21T08:15:11Z"
    },
    {
      Country: "Antigua and Barbuda",
      CountryCode: "AG",
      Slug: "antigua-and-barbuda",
      NewConfirmed: 0,
      TotalConfirmed: 26,
      NewDeaths: 0,
      TotalDeaths: 3,
      NewRecovered: 0,
      TotalRecovered: 22,
      Date: "2020-06-21T08:15:11Z"
    },
    {
      Country: "Argentina",
      CountryCode: "AR",
      Slug: "argentina",
      NewConfirmed: 1634,
      TotalConfirmed: 41204,
      NewDeaths: 13,
      TotalDeaths: 992,
      NewRecovered: 355,
      TotalRecovered: 12206,
      Date: "2020-06-21T08:15:11Z"
    },
    {
      Country: "Armenia",
      CountryCode: "AM",
      Slug: "armenia",
      NewConfirmed: 551,
      TotalConfirmed: 19708,
      NewDeaths: 13,
      TotalDeaths: 332,
      NewRecovered: 588,
      TotalRecovered: 8854,
      Date: "2020-06-21T08:15:11Z"
    },
    {
      Country: "Australia",
      CountryCode: "AU",
      Slug: "australia",
      NewConfirmed: 50,
      TotalConfirmed: 7461,
      NewDeaths: 0,
      TotalDeaths: 102,
      NewRecovered: 15,
      TotalRecovered: 6896,
      Date: "2020-06-21T08:15:11Z"
    },
    {
      Country: "Austria",
      CountryCode: "AT",
      Slug: "austria",
      NewConfirmed: 52,
      TotalConfirmed: 17323,
      NewDeaths: 0,
      TotalDeaths: 688,
      NewRecovered: 34,
      TotalRecovered: 16175,
      Date: "2020-06-21T08:15:11Z"
    },
    {
      Country: "Azerbaijan",
      CountryCode: "AZ",
      Slug: "azerbaijan",
      NewConfirmed: 471,
      TotalConfirmed: 12238,
      NewDeaths: 5,
      TotalDeaths: 148,
      NewRecovered: 191,
      TotalRecovered: 6516,
      Date: "2020-06-21T08:15:11Z"
    },
    {
      Country: "Bahamas",
      CountryCode: "BS",
      Slug: "bahamas",
      NewConfirmed: 0,
      TotalConfirmed: 104,
      NewDeaths: 0,
      TotalDeaths: 11,
      NewRecovered: 0,
      TotalRecovered: 74,
      Date: "2020-06-21T08:15:11Z"
    }
  ],
  countries: [],
  globalStats: {},
  country: {
    details: {},
    info: {},
    cases: {}
  },
  countryDetails: {}
};

const getters = {
  countries: () => state.countries,
  globalStats: () => state.globalStats,
  country: () => state.country,
  countryDetails: () => state.countryDetails
};

const actions = {
  fetchAllCountries({
    commit
  }) {
    return new Promise((resolve, reject) => {
      countriesAxios
        .get("/summary")
        .then(response => {
          const globalStats = response.data.Global;
          const countries = response.data.Countries;

          commit("setGlobalStats", globalStats);
          commit("setCountries", countries);

          resolve();
        })
        .catch(err => {
          console.log(err.err);
          reject(err);
        });
    });
  },
  fetchSingleCountry({
    commit
  }, countryName) {
    return new Promise((resolve, reject) => {
      countriesAxios
        .get(`/dayone/country/${countryName}`)
        .then(response => {
          const cases = response.data;
          commit("setCountryCases", cases);
          resolve();
        })
        .catch(err => {
          reject({
            err
          });
        });
    });
  },
  fetchCountryDetails({
    commit
  }, countryName) {
    return new Promise((resolve, reject) => {
      countryDetailAxios
        .get(`/${countryName}`)
        .then(response => {
          commit("setCountryDetails", response.data[0]);

          resolve();
        })
        .catch(err => {
          reject("Oops! Something went wrong.");
        });
    });
  },
  setCountry({
    commit
  }, country) {
    commit("setCountry", country);
  }
};

const mutations = {
  setGlobalStats(state, globalStats) {
    Object.assign(state.globalStats, globalStats);
  },
  setCountries(state, countries) {
    state.countries = [];
    state.countries = [...countries];
  },
  setCountryCases(state, cases) {
    let countryCases = {
      cases: [...cases],
      firstIncedenceDate: cases[0].Date
    };

    Object.assign(state.country.cases, countryCases);
  },
  setCountry(state, country) {
    const countryObj = {
      ...country
    };

    countryObj.recoveryRate = (
      (country.TotalRecovered / country.TotalConfirmed) *
      100
    ).toFixed(1);
    countryObj.fatalityRate = (
      (country.TotalDeaths / country.TotalConfirmed) *
      100
    ).toFixed(1);

    Object.assign(state.country.details, countryObj);
  },
  setCountryDetails(state, details) {
    const countryDetails = {
      name: details.name,
      capital: details.capital,
      flag: details.flag,
      population: details.population
    };
    Object.assign(state.country.info, countryDetails);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
