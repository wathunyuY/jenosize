export const GOOGLE_PLACE_URL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json"
export const GOOGLE_INPUTTYPE = "textquery"
export const GOOGLE_FIELDS_OF_PLACE = ["photos","formatted_address","name","rating","opening_hours","geometry"].toString()
export const GOOGLE_PLACE_RESPONSE_STATUS = {
    OK : "OK",
    ZERO_RESULTS: "ZERO_RESULTS",
    REQUEST_DENIED: "REQUEST_DENIED"
}