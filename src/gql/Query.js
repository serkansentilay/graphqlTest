import { gql } from "@apollo/client";

export const CONTINENT_QUERY = gql`
  query ContinentQuery {
    continents {
      code
      name
    }
  }
`;

export const COUNTRY_QUERY = gql`
  query Continent($code: ID!) {
    continent(code: $code) {
      countries {
        code
        name
      }
    }
  }
`;

export const STATES_QUERY = gql`
    query Continent($code: ID!) {
        country(code: $code) {
        states {
            name      
        }
        }
    }
`;