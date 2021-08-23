import { useTheme } from '@material-ui/core';
import React, { useEffect, useRef } from 'react';
import { VectorMap } from 'react-jvectormap';
import { useHistory } from 'react-router-dom';
const map = [
  { code: 'IN-BR', value: 'bihar' },
  { code: 'IN-PY', value: 'puducherry' },
  { code: 'IN-DD', value: 'dadra_and_nagar_haveli_and_daman_and_diu' },
  { code: 'IN-DN', value: 'dadra_and_nagar_haveli_and_daman_and_diu' },
  { code: 'IN-DL', value: 'delhi' },
  { code: 'IN-NL', value: 'nagaland' },
  { code: 'IN-WB', value: 'west_bengal' },
  { code: 'IN-HR', value: 'haryana' },
  { code: 'IN-HP', value: 'himachal_pradesh' },
  { code: 'IN-AS', value: 'assam' },
  { code: 'IN-UT', value: 'uttaranchal' },
  { code: 'IN-JH', value: 'jharkhand' },
  { code: 'IN-JK', value: 'jammu_and_Kashmir' },
  { code: 'IN-UP', value: 'uttar_pradesh' },
  { code: 'IN-SK', value: 'sikkim' },
  { code: 'IN-MZ', value: 'mizoram' },
  { code: 'IN-CT', value: 'chhattisgarh' },
  { code: 'IN-CH', value: 'chandigarh' },
  { code: 'IN-GA', value: 'goa' },
  { code: 'IN-GJ', value: 'gujarat' },
  { code: 'IN-RJ', value: 'rajasthan' },
  { code: 'IN-MP', value: 'madhya_pradesh' },
  { code: 'IN-OR', value: 'odisha' },
  { code: 'IN-TN', value: 'tamil_nadu' },
  { code: 'IN-AN', value: 'andaman_and_nicobar_islands' },
  { code: 'IN-AP', value: 'andhra_pradesh' },
  { code: 'IN-TR', value: 'tripura' },
  { code: 'IN-AR', value: 'arunachal_pradesh' },
  { code: 'IN-KA', value: 'karnataka' },
  { code: 'IN-PB', value: 'punjab' },
  { code: 'IN-ML', value: 'meghalaya' },
  { code: 'IN-MN', value: 'manipur' },
  { code: 'IN-MH', value: 'maharashtra' },
  { code: 'IN-KL', value: 'kerala' },
];
const getalldata = () => {
  var countryData = [];
  map.forEach(function (obj) {
    countryData[obj.code] = obj.value;
  });
  return countryData;
};
function India() {
  const theme = useTheme();
  const history = useHistory();

  const handleRegionClick = (e, el) => {
    map.forEach((data) => {
      if (el === data.code) {
        history.push(`/state/${data.value}`);
        return;
      }
    });
    setTimeout(() => {
      Array.from(document.getElementsByClassName('jvectormap-tip')).forEach(
        (el) => {
          el.style.display = 'none';
        }
      );
    }, 1200);
  };

  useEffect(() => {
    let myInterval = setInterval(() => {
      Array.from(document.getElementsByClassName('jvectormap-tip')).forEach(
        (el) => {
          el.style.display = 'none';
        }
      );
    }, 1500);
    return () => {
      clearInterval(myInterval);
    };
  }, []);
  return (
    <div style={{ overflow: 'hidden' }}>
      <VectorMap
        map={'in_mill'}
        backgroundColor={theme.palette.primaryColor.black}
        focusOn={{
          x: 0.5,
          y: 0.5,
          scale: 0,
          animate: true,
        }}
        containerStyle={{
          width: theme.typography.pxToVw(500),
          height: theme.typography.pxToVh(470),
          padding: theme.spacing(3),
          backgroundColor: theme.palette.primaryColor.black,
        }}
        onRegionClick={handleRegionClick}
        regionStyle={{
          initial: {
            fill: theme.palette.primaryColor.red,
            'fill-opacity': 1,
            stroke: 'none',
            'stroke-width': 1,
            'stroke-opacity': 1,
          },
          hover: {
            fill: theme.palette.primaryColor.white,
            'fill-opacity': 1,
            cursor: 'pointer',
          },
        }}
        regionsSelectable={false}
        markersSelectable={false}
        markersSelectableOne={false}
        panOnDrag={false}
        series={{
          regions: [
            {
              values: getalldata, //can be directly served //with api response or any data
              scale: ['#C8EEFF', '#0071A4'], //color range
              normalizeFunction: 'polynomial',
            },
          ],
        }}
      />
    </div>
  );
}

export default India;
