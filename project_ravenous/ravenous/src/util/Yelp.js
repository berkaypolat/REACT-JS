const apiKey = "s8WBM-sf6ShMS8aR6F5-S6tX9gYn8SUefmJL4jVtL2KxS5ZQKDMj9fFVKhYIGtCAz_qylYfy5QPiciJhOHhCBZlJg5gQmylasa-7NcDX5iXRTgSkHDyKW6ZieIshXXYx";
//const clientId = "cto67lB1r7Rz4XBdRCyaww";
const Yelp = {
    search: function(term,location,sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
                    { headers: {
                        Authorization: `Bearer ${apiKey}`
                    }
                }).then(response =>{
                    return response.json();
                }).then(jsonResponse => {
                    if(jsonResponse.businesses){
                        return jsonResponse.businesses.map(business => {
                            return {
                                id: business.id,
                                imageSrc: business.image_url,
                                name: business.name,
                                address: business.location.address1,
                                city: business.location.city,
                                state: business.location.state,
                                zipCode: business.location.zip_code,
                                category: business.categories[0].title,
                                rating: business.rating,
                                reviewCount: business.review_count
                            };
                        });
                    }
                });
    }
};
export default Yelp;
