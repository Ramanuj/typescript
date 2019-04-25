import { UserProfileData } from '../data/user-profile-data';

export class UserProfileDao {

    constructor() {

    }

    saveUserProfile(userProfile: UserProfileData): boolean {
        console.log('saving user profile : ' + userProfile.acceptTerms);
        return userProfile.acceptTerms;
    }

    fetchAllStates(): Array<string> {
        console.log('getting all the states');

        const listOfStates: Array<string> = [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Carolina',
            'North Dakota',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming',
            'District of Columbia',
            'Puerto Rico',
            'Guam',
            'American Samoa',
            'U.S. Virgin Islands',
            'Northern Mariana Islands'
        ];


        return listOfStates;

    }

}
