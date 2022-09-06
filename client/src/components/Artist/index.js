import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_ARTIST } from '../../utils/queries';

function Artists() {
    const { loading, data } = useQuery(QUERY_ARTIST);
    const artists = data?.artists || [];
  
    return (
      <main>
          <div className="col-12 col-md-8 mb-3">
            {loading ? (
              <div>Loading...</div>
            ) : (
                <div>{artists}</div>
            )}
          </div>
      </main>
    );
};

export default Artists;
