import '../firebase/firebase';
import database from '../firebase/firebase';
import moment from 'moment';

var now = moment();

const monthArr = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

var defaultFullData = {
    date : {
        day: now.format('D'),
        month: now.format('M')-1,
        year: parseInt(now.format('YYYY'), 10)
        // year: 2020
    },
    account: {
        userName: 'Ashu',
        passWord: '123'
    },
    yearlyVisitorCount: [],
    monthlyVisitorCount: [],
    dailyVisitorCount:[],
    categoryWiseCount: [24, 17, 5, 7, 2],
    userRatings: [23, 56, 20, 4, 33],
    mon: 'adil shah palace',
    monYearlyVisitorCount: [],
    monMonthlyVisitorCount: [],
    monDailyVisitorCount: []
}

const fullData = (state = defaultFullData, action) => {

    switch (action.type){
        case 'GET_DATA':
            var docRef = database.collection("Data").doc("Total");
            docRef.get().then(function(doc) {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    const currYear = state.date.year;
                    const currMonth = state.date.month;
                    const currDay = state.date.day;

                    var temp = doc.data().years;
                    for(var data in temp){
                        if((data + 5) > currYear){
                            state.yearlyVisitorCount.push({
                                key: data,
                                count: temp[data]
                            });
                        }
                    };

                    var temp = doc.data().months;
                    var j = currMonth;
                    for(var i=0;i<12;i++){
                        j=(j+1)%12; 
                            state.monthlyVisitorCount.push({
                                key : monthArr[j],
                                count: temp[j]
                            });


                        
                    };

                    var temp = doc.data().days;
                    var j = currDay;
                    for(var i=0;i<28;){
                        if(temp[j]!=-1){
                            j=(j-1+31)%31;
                            state.dailyVisitorCount.push({
                                key : j+1,
                                count: temp[j]
                            });
                            i++;
                        }

                        
                    };
                    state.dailyVisitorCount.reverse();
                    

                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });

            var monRef = database.collection("Data").doc(`${state.mon}`);
            monRef.get().then(function(doc) {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    const currYear = state.date.year;
                    const currMonth = state.date.month;
                    const currDay = state.date.day;

                    var temp = doc.data().years;
                    for(var data in temp){
                        if((data + 5) > currYear){
                            state.monYearlyVisitorCount.push({
                                key: data,
                                count: temp[data]
                            });
                        }
                    };

                    var temp = doc.data().months;
                    var j = currMonth;
                    for(var i=0;i<12;i++){
                        j=(j+1)%12; 
                            state.monMonthlyVisitorCount.push({
                                key : monthArr[j],
                                count: temp[j]
                            });


                        
                    };

                    var temp = doc.data().days;
                    var j = currDay;
                    for(var i=0;i<28;){
                        if(temp[j]!=-1){
                            j=(j-1+31)%31;
                            state.monDailyVisitorCount.push({
                                key : j+1,
                                count: temp[j]
                            });
                            i++;
                        }

                        
                    };
                    state.monDailyVisitorCount.reverse();
                    

                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
            
            return state;

        case 'GET_MON_DATA':

            var tempYearlyVisitorCount = [];
            var tempMonthlyVisitorCount = [];
            var tempDailyVisitorCount = [];

            state.mon = action.mon;
            var monRef = database.collection("Data").doc(`${state.mon}`);
            monRef.get().then(function(doc) {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    const currYear = state.date.year;
                    const currMonth = state.date.month;
                    const currDay = state.date.day;

                    var temp = doc.data().years;
                    for(var data in temp){
                        if((data + 5) > currYear){
                            tempYearlyVisitorCount.push({
                                key: data,
                                count: temp[data]
                            });
                        }
                    };

                    var temp = doc.data().months;
                    var j = currMonth;
                    for(var i=0;i<12;i++){
                        j=(j+1)%12; 
                            tempMonthlyVisitorCount.push({
                                key : monthArr[j],
                                count: temp[j]
                            });


                        
                    };

                    var temp = doc.data().days;
                    var j = currDay;
                    for(var i=0;i<28;){
                        if(temp[j]!=-1){
                            j=(j-1+31)%31;
                            tempDailyVisitorCount.push({
                                key : j+1,
                                count: temp[j]
                            });
                            i++;
                        }

                        
                    };
                    tempDailyVisitorCount.reverse();
                    

                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
            console.log(state);
            const prev = state;
            return {
                ...prev,
                mon: action.mon,
                monYearlyVisitorCount: tempYearlyVisitorCount,
                monMonthlyVisitorCount: tempMonthlyVisitorCount,
                monDailyVisitorCount: tempDailyVisitorCount
                
            }
        default :
            return state;
    }
};

export default fullData;