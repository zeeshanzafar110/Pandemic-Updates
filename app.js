





window.onload = function() {
	//getCovidStats();
}
const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
const api_path="https://api.covid19api.com";
fetch(api_path, requestOptions)
  .then(function(resp) { return resp.json() })
  .then(function(data) {
		let list_all_countrypath=data.countriesRoute.Path;
		console.log('all country path->',list_all_countrypath);
		getListOfAllCountry(list_all_countrypath);
	}
 )
 .catch(error => console.log('error', error));
 function getListOfAllCountry(countrypath)
 {
 	fetch(api_path+countrypath, requestOptions)
          .then(function(resp) { return resp.json() })
          .then(function(data) {
          	        let total_cuntry=data.length
          	        document.getElementById('total_country').innerHTML = total_cuntry;
          	        var countrydata='';
                    data.forEach(readArrayData);
                    function readArrayData(value) {
                    	let country_slug=value.Slug;
						let data='<a class="dropdown-item" href="javascript:getCountryWiseData(\'' + country_slug + '\')">'+value.Country+'</a>';
						countrydata = countrydata + data; 
					}
					//let listcountry='<div class="btn-group"><button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Please Select the Country To View The Covid-19 Data</button><div class="dropdown-menu">'+countrydata+'</div></div>';
					let listcountry=countrydata;
					document.getElementById('coutrydropdown').innerHTML = listcountry;
	      })
          .catch(error => console.log('error', error));
 }
 function getCountryWiseData(country_slug)
		 {
		 	  let country_wise_path='/dayone/country/'+country_slug;
		 	  ////////////hide and show the div on api call
		 	  var x = document.getElementById("country_wise_covid_19_cases_table");
			  if (x.style.display === "none") {
			    x.style.display = "block";
			  }
			  ////////end of hide and show div on api call
		 	  fetch(api_path+country_wise_path, requestOptions)
			  .then(function(resp) { return resp.json() })
			  .then(function(data) {
					var tabledata='';
					data.forEach(getTableData);
					function getTableData(value)
					{
                       	let data='<tr><td style="background-color:#dfc1ab;">'+value.Date+'</td><td style="background-color: #eeee6d8c;">'+value.Confirmed+'</td><td style="background-color:yellow;">'+value.Active+'</td><td style="background-color: #f96b6b;">'+value.Deaths+'</td><td style="background-color: #7de67d;">'+value.Recovered+'</td></tr>';
                        tabledata = tabledata + data; 
					}
					document.getElementById('country_wise_covid_19_cases_table').innerHTML = '<div class="well">Date Wise Covid-19 Cases ('+country_slug+') </div><table id="country_wise_covid_19_cases" class="table table-bordered table-hover table-condensed"><td style="background-color: chocolate;">Date</td><td style="background-color: chocolate;">Confirmed</td><td style="background-color: chocolate;">Active</td><td style="background-color: chocolate;">Death</td><td style="background-color: chocolate;">Recovered</td>'+tabledata+'</table>';
				}
			 )
			 .catch(error => console.log('error', error));
		 }
function getCovidStats()
{
			  fetch(api_path+'/summary', requestOptions)
			  .then(function(resp) { return resp.json() })
			  .then(function(data) {
					console.log('country summary data->',data);
				}
			 )
			 .catch(error => console.log('error', error));
}		 
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
 