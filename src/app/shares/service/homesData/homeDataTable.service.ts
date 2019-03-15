import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeDataTableService implements InMemoryDbService {
    createDb() {
        const carousel = [
            'assets/api/images/carousel/218.jpg',
            'assets/api/images/carousel/222.jpg',
            'assets/api/images/carousel/238.jpg',
            'assets/api/images/carousel/278.jpg',
            'assets/api/images/carousel/315.jpg',
            'assets/api/images/carousel/323.jpg',
            'assets/api/images/carousel/334.jpg'
        ];

        const hometable = [
            {
                "athlete": "Michael Phelps",
                "age": 23,
                "country": "United States",
                "year": 2008,
                "date": "24/08/2008",
                "sport": "Swimming",
                "gold": 8,
                "silver": 0,
                "bronze": 0,
                "total": 8
            }, {
                "athlete": "Michael Phelps",
                "age": 19,
                "country": "United States",
                "year": 2004,
                "date": "29/08/2004",
                "sport": "Swimming",
                "gold": 6,
                "silver": 0,
                "bronze": 2,
                "total": 8
            }, {
                "athlete": "Michael Phelps",
                "age": 27,
                "country": "United States",
                "year": 2012,
                "date": "12/08/2012",
                "sport": "Swimming",
                "gold": 4,
                "silver": 2,
                "bronze": 0,
                "total": 6
            }, {
                "athlete": "Natalie Coughlin",
                "age": 25,
                "country": "United States",
                "year": 2008,
                "date": "24/08/2008",
                "sport": "Swimming",
                "gold": 1,
                "silver": 2,
                "bronze": 3,
                "total": 6
            }, {
                "athlete": "Aleksey Nemov",
                "age": 24,
                "country": "Russia",
                "year": 2000,
                "date": "01/10/2000",
                "sport": "Gymnastics",
                "gold": 2,
                "silver": 1,
                "bronze": 3,
                "total": 6
            }, {
                "athlete": "Alicia Coutts",
                "age": 24,
                "country": "Australia",
                "year": 2012,
                "date": "12/08/2012",
                "sport": "Swimming",
                "gold": 1,
                "silver": 3,
                "bronze": 1,
                "total": 5
            }, {
                "athlete": "Missy Franklin",
                "age": 17,
                "country": "United States",
                "year": 2012,
                "date": "12/08/2012",
                "sport": "Swimming",
                "gold": 4,
                "silver": 0,
                "bronze": 1,
                "total": 5
            }, {
                "athlete": "Ryan Lochte",
                "age": 27,
                "country": "United States",
                "year": 2012,
                "date": "12/08/2012",
                "sport": "Swimming",
                "gold": 2,
                "silver": 2,
                "bronze": 1,
                "total": 5
            }, {
                "athlete": "Allison Schmitt",
                "age": 22,
                "country": "United States",
                "year": 2012,
                "date": "12/08/2012",
                "sport": "Swimming",
                "gold": 3,
                "silver": 1,
                "bronze": 1,
                "total": 5
            }, {
                "athlete": "Natalie Coughlin",
                "age": 21,
                "country": "United States",
                "year": 2004,
                "date": "29/08/2004",
                "sport": "Swimming",
                "gold": 2,
                "silver": 2,
                "bronze": 1,
                "total": 5
            }, {
                "athlete": "Ian Thorpe",
                "age": 17,
                "country": "Australia",
                "year": 2000,
                "date": "01/10/2000",
                "sport": "Swimming",
                "gold": 3,
                "silver": 2,
                "bronze": 0,
                "total": 5
            }, {
                "athlete": "Dara Torres",
                "age": 33,
                "country": "United States",
                "year": 2000,
                "date": "01/10/2000",
                "sport": "Swimming",
                "gold": 2,
                "silver": 0,
                "bronze": 3,
                "total": 5
            }, {
                "athlete": "Cindy Klassen",
                "age": 26,
                "country": "Canada",
                "year": 2006,
                "date": "26/02/2006",
                "sport": "Speed Skating",
                "gold": 1,
                "silver": 2,
                "bronze": 2,
                "total": 5
            }, {
                "athlete": "Nastia Liukin",
                "age": 18,
                "country": "United States",
                "year": 2008,
                "date": "24/08/2008",
                "sport": "Gymnastics",
                "gold": 1,
                "silver": 3,
                "bronze": 1,
                "total": 5
            }, {
                "athlete": "Marit Bjørgen",
                "age": 29,
                "country": "Norway",
                "year": 2010,
                "date": "28/02/2010",
                "sport": "Cross Country Skiing",
                "gold": 3,
                "silver": 1,
                "bronze": 1,
                "total": 5
            }, {
                "athlete": "Sun Yang",
                "age": 20,
                "country": "China",
                "year": 2012,
                "date": "12/08/2012",
                "sport": "Swimming",
                "gold": 2,
                "silver": 1,
                "bronze": 1,
                "total": 4
            }, {
                "athlete": "Kirsty Coventry",
                "age": 24,
                "country": "Zimbabwe",
                "year": 2008,
                "date": "24/08/2008",
                "sport": "Swimming",
                "gold": 1,
                "silver": 3,
                "bronze": 0,
                "total": 4
            }, {
                "athlete": "Libby Lenton-Trickett",
                "age": 23,
                "country": "Australia",
                "year": 2008,
                "date": "24/08/2008",
                "sport": "Swimming",
                "gold": 2,
                "silver": 1,
                "bronze": 1,
                "total": 4
            }, {
                "athlete": "Ryan Lochte",
                "age": 24,
                "country": "United States",
                "year": 2008,
                "date": "24/08/2008",
                "sport": "Swimming",
                "gold": 2,
                "silver": 0,
                "bronze": 2,
                "total": 4
            }, {
                "athlete": "Inge de Bruijn",
                "age": 30,
                "country": "Netherlands",
                "year": 2004,
                "date": "29/08/2004",
                "sport": "Swimming",
                "gold": 1,
                "silver": 1,
                "bronze": 2,
                "total": 4
            }, {
                "athlete": "Petria Thomas",
                "age": 28,
                "country": "Australia",
                "year": 2004,
                "date": "29/08/2004",
                "sport": "Swimming",
                "gold": 3,
                "silver": 1,
                "bronze": 0,
                "total": 4
            }, {
                "athlete": "Ian Thorpe",
                "age": 21,
                "country": "Australia",
                "year": 2004,
                "date": "29/08/2004",
                "sport": "Swimming",
                "gold": 2,
                "silver": 1,
                "bronze": 1,
                "total": 4
            }, {
                "athlete": "Inge de Bruijn",
                "age": 27,
                "country": "Netherlands",
                "year": 2000,
                "date": "01/10/2000",
                "sport": "Swimming",
                "gold": 3,
                "silver": 1,
                "bronze": 0,
                "total": 4
            }, {
                "athlete": "Gary Hall Jr.",
                "age": 25,
                "country": "United States",
                "year": 2000,
                "date": "01/10/2000",
                "sport": "Swimming",
                "gold": 2,
                "silver": 1,
                "bronze": 1,
                "total": 4
            }, {
                "athlete": "Michael Klim",
                "age": 23,
                "country": "Australia",
                "year": 2000,
                "date": "01/10/2000",
                "sport": "Swimming",
                "gold": 2,
                "silver": 2,
                "bronze": 0,
                "total": 4
            }, {
                "athlete": "Susie O'Neill",
                "age": 27,
                "country": "Australia",
                "year": 2000,
                "date": "01/10/2000",
                "sport": "Swimming",
                "gold": 1,
                "silver": 3,
                "bronze": 0,
                "total": 4
            }, {
                "athlete": "Jenny Thompson",
                "age": 27,
                "country": "United States",
                "year": 2000,
                "date": "01/10/2000",
                "sport": "Swimming",
                "gold": 3,
                "silver": 0,
                "bronze": 1,
                "total": 4
            }, {
                "athlete": "Pieter van den Hoogenband",
                "age": 22,
                "country": "Netherlands",
                "year": 2000,
                "date": "01/10/2000",
                "sport": "Swimming",
                "gold": 2,
                "silver": 0,
                "bronze": 2,
                "total": 4
            }, {
                "athlete": "An Hyeon-Su",
                "age": 20,
                "country": "South Korea",
                "year": 2006,
                "date": "26/02/2006",
                "sport": "Short-Track Speed Skating",
                "gold": 3,
                "silver": 0,
                "bronze": 1,
                "total": 4
            }, {
                "athlete": "Aliya Mustafina",
                "age": 17,
                "country": "Russia",
                "year": 2012,
                "date": "12/08/2012",
                "sport": "Gymnastics",
                "gold": 1,
                "silver": 1,
                "bronze": 2,
                "total": 4
            }, {
                "athlete": "Shawn Johnson",
                "age": 16,
                "country": "United States",
                "year": 2008,
                "date": "24/08/2008",
                "sport": "Gymnastics",
                "gold": 1,
                "silver": 3,
                "bronze": 0,
                "total": 4
            }, {
                "athlete": "Dmitry Sautin",
                "age": 26,
                "country": "Russia",
                "year": 2000,
                "date": "01/10/2000",
                "sport": "Diving",
                "gold": 1,
                "silver": 1,
                "bronze": 2,
                "total": 4
            }, {
                "athlete": "Leontien Zijlaard-van Moorsel",
                "age": 30,
                "country": "Netherlands",
                "year": 2000,
                "date": "01/10/2000",
                "sport": "Cycling",
                "gold": 3,
                "silver": 1,
                "bronze": 0,
                "total": 4
            }, {
                "athlete": "Petter Northug Jr.",
                "age": 24,
                "country": "Norway",
                "year": 2010,
                "date": "28/02/2010",
                "sport": "Cross Country Skiing",
                "gold": 2,
                "silver": 1,
                "bronze": 1,
                "total": 4
            }, {
                "athlete": "Ole Einar Bjørndalen",
                "age": 28,
                "country": "Norway",
                "year": 2002,
                "date": "24/02/2002",
                "sport": "Biathlon",
                "gold": 4,
                "silver": 0,
                "bronze": 0,
                "total": 4
            }, {
                "athlete": "Janica Kostelic",
                "age": 20,
                "country": "Croatia",
                "year": 2002,
                "date": "24/02/2002",
                "sport": "Alpine Skiing",
                "gold": 3,
                "silver": 1,
                "bronze": 0,
                "total": 4
            }, {
                "athlete": "Nathan Adrian",
                "age": 23,
                "country": "United States",
                "year": 2012,
                "date": "12/08/2012",
                "sport": "Swimming",
                "gold": 2,
                "silver": 1,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Yannick Agnel",
                "age": 20,
                "country": "France",
                "year": 2012,
                "date": "12/08/2012",
                "sport": "Swimming",
                "gold": 2,
                "silver": 1,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Brittany Elmslie",
                "age": 18,
                "country": "Australia",
                "year": 2012,
                "date": "12/08/2012",
                "sport": "Swimming",
                "gold": 1,
                "silver": 2,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Matt Grevers",
                "age": 27,
                "country": "United States",
                "year": 2012,
                "date": "12/08/2012",
                "sport": "Swimming",
                "gold": 2,
                "silver": 1,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Ryosuke Irie",
                "age": 22,
                "country": "Japan",
                "year": 2012,
                "date": "12/08/2012",
                "sport": "Swimming",
                "gold": 0,
                "silver": 2,
                "bronze": 1,
                "total": 3
            }, {
                "athlete": "Cullen Jones",
                "age": 28,
                "country": "United States",
                "year": 2012,
                "date": "12/08/2012",
                "sport": "Swimming",
                "gold": 1,
                "silver": 2,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Ranomi Kromowidjojo",
                "age": 21,
                "country": "Netherlands",
                "year": 2012,
                "date": "12/08/2012",
                "sport": "Swimming",
                "gold": 2,
                "silver": 1,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Camille Muffat",
                "age": 22,
                "country": "France",
                "year": 2012,
                "date": "12/08/2012",
                "sport": "Swimming",
                "gold": 1,
                "silver": 1,
                "bronze": 1,
                "total": 3
            }, {
                "athlete": "Mel Schlanger",
                "age": 25,
                "country": "Australia",
                "year": 2012,
                "date": "12/08/2012",
                "sport": "Swimming",
                "gold": 1,
                "silver": 2,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Emily Seebohm",
                "age": 20,
                "country": "Australia",
                "year": 2012,
                "date": "12/08/2012",
                "sport": "Swimming",
                "gold": 1,
                "silver": 2,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Rebecca Soni",
                "age": 25,
                "country": "United States",
                "year": 2012,
                "date": "12/08/2012",
                "sport": "Swimming",
                "gold": 2,
                "silver": 1,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Satomi Suzuki",
                "age": 21,
                "country": "Japan",
                "year": 2012,
                "date": "12/08/2012",
                "sport": "Swimming",
                "gold": 0,
                "silver": 1,
                "bronze": 2,
                "total": 3
            }, {
                "athlete": "Dana Vollmer",
                "age": 24,
                "country": "United States",
                "year": 2012,
                "date": "12/08/2012",
                "sport": "Swimming",
                "gold": 3,
                "silver": 0,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Alain Bernard",
                "age": 25,
                "country": "France",
                "year": 2008,
                "date": "24/08/2008",
                "sport": "Swimming",
                "gold": 1,
                "silver": 1,
                "bronze": 1,
                "total": 3
            }, {
                "athlete": "László Cseh Jr.",
                "age": 22,
                "country": "Hungary",
                "year": 2008,
                "date": "24/08/2008",
                "sport": "Swimming",
                "gold": 0,
                "silver": 3,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Matt Grevers",
                "age": 23,
                "country": "United States",
                "year": 2008,
                "date": "24/08/2008",
                "sport": "Swimming",
                "gold": 2,
                "silver": 1,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Margaret Hoelzer",
                "age": 25,
                "country": "United States",
                "year": 2008,
                "date": "24/08/2008",
                "sport": "Swimming",
                "gold": 0,
                "silver": 2,
                "bronze": 1,
                "total": 3
            }, {
                "athlete": "Katie Hoff",
                "age": 19,
                "country": "United States",
                "year": 2008,
                "date": "24/08/2008",
                "sport": "Swimming",
                "gold": 0,
                "silver": 1,
                "bronze": 2,
                "total": 3
            }, {
                "athlete": "Leisel Jones",
                "age": 22,
                "country": "Australia",
                "year": 2008,
                "date": "24/08/2008",
                "sport": "Swimming",
                "gold": 2,
                "silver": 1,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Kosuke Kitajima",
                "age": 25,
                "country": "Japan",
                "year": 2008,
                "date": "24/08/2008",
                "sport": "Swimming",
                "gold": 2,
                "silver": 0,
                "bronze": 1,
                "total": 3
            }, {
                "athlete": "Andrew Lauterstein",
                "age": 21,
                "country": "Australia",
                "year": 2008,
                "date": "24/08/2008",
                "sport": "Swimming",
                "gold": 0,
                "silver": 1,
                "bronze": 2,
                "total": 3
            }, {
                "athlete": "Jason Lezak",
                "age": 32,
                "country": "United States",
                "year": 2008,
                "date": "24/08/2008",
                "sport": "Swimming",
                "gold": 2,
                "silver": 0,
                "bronze": 1,
                "total": 3
            }, {
                "athlete": "Pang Jiaying",
                "age": 23,
                "country": "China",
                "year": 2008,
                "date": "24/08/2008",
                "sport": "Swimming",
                "gold": 0,
                "silver": 1,
                "bronze": 2,
                "total": 3
            }, {
                "athlete": "Aaron Peirsol",
                "age": 25,
                "country": "United States",
                "year": 2008,
                "date": "24/08/2008",
                "sport": "Swimming",
                "gold": 2,
                "silver": 1,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Steph Rice",
                "age": 20,
                "country": "Australia",
                "year": 2008,
                "date": "24/08/2008",
                "sport": "Swimming",
                "gold": 3,
                "silver": 0,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Jess Schipper",
                "age": 21,
                "country": "Australia",
                "year": 2008,
                "date": "24/08/2008",
                "sport": "Swimming",
                "gold": 1,
                "silver": 0,
                "bronze": 2,
                "total": 3
            }, {
                "athlete": "Rebecca Soni",
                "age": 21,
                "country": "United States",
                "year": 2008,
                "date": "24/08/2008",
                "sport": "Swimming",
                "gold": 1,
                "silver": 2,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Eamon Sullivan",
                "age": 22,
                "country": "Australia",
                "year": 2008,
                "date": "24/08/2008",
                "sport": "Swimming",
                "gold": 0,
                "silver": 2,
                "bronze": 1,
                "total": 3
            }, {
                "athlete": "Dara Torres",
                "age": 41,
                "country": "United States",
                "year": 2008,
                "date": "24/08/2008",
                "sport": "Swimming",
                "gold": 0,
                "silver": 3,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Amanda Beard",
                "age": 22,
                "country": "United States",
                "year": 2004,
                "date": "29/08/2004",
                "sport": "Swimming",
                "gold": 1,
                "silver": 2,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Antje Buschschulte",
                "age": 25,
                "country": "Germany",
                "year": 2004,
                "date": "29/08/2004",
                "sport": "Swimming",
                "gold": 0,
                "silver": 0,
                "bronze": 3,
                "total": 3
            }, {
                "athlete": "Kirsty Coventry",
                "age": 20,
                "country": "Zimbabwe",
                "year": 2004,
                "date": "29/08/2004",
                "sport": "Swimming",
                "gold": 1,
                "silver": 1,
                "bronze": 1,
                "total": 3
            }, {
                "athlete": "Ian Crocker",
                "age": 21,
                "country": "United States",
                "year": 2004,
                "date": "29/08/2004",
                "sport": "Swimming",
                "gold": 1,
                "silver": 1,
                "bronze": 1,
                "total": 3
            }, {
                "athlete": "Grant Hackett",
                "age": 24,
                "country": "Australia",
                "year": 2004,
                "date": "29/08/2004",
                "sport": "Swimming",
                "gold": 1,
                "silver": 2,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Brendan Hansen",
                "age": 22,
                "country": "United States",
                "year": 2004,
                "date": "29/08/2004",
                "sport": "Swimming",
                "gold": 1,
                "silver": 1,
                "bronze": 1,
                "total": 3
            }, {
                "athlete": "Jodie Henry",
                "age": 20,
                "country": "Australia",
                "year": 2004,
                "date": "29/08/2004",
                "sport": "Swimming",
                "gold": 3,
                "silver": 0,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Otylia Jedrzejczak",
                "age": 20,
                "country": "Poland",
                "year": 2004,
                "date": "29/08/2004",
                "sport": "Swimming",
                "gold": 1,
                "silver": 2,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Leisel Jones",
                "age": 18,
                "country": "Australia",
                "year": 2004,
                "date": "29/08/2004",
                "sport": "Swimming",
                "gold": 1,
                "silver": 1,
                "bronze": 1,
                "total": 3
            }, {
                "athlete": "Kosuke Kitajima",
                "age": 21,
                "country": "Japan",
                "year": 2004,
                "date": "29/08/2004",
                "sport": "Swimming",
                "gold": 2,
                "silver": 0,
                "bronze": 1,
                "total": 3
            }, {
                "athlete": "Laure Manaudou",
                "age": 17,
                "country": "France",
                "year": 2004,
                "date": "29/08/2004",
                "sport": "Swimming",
                "gold": 1,
                "silver": 1,
                "bronze": 1,
                "total": 3
            }, {
                "athlete": "Aaron Peirsol",
                "age": 21,
                "country": "United States",
                "year": 2004,
                "date": "29/08/2004",
                "sport": "Swimming",
                "gold": 3,
                "silver": 0,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Kaitlin Sandeno",
                "age": 21,
                "country": "United States",
                "year": 2004,
                "date": "29/08/2004",
                "sport": "Swimming",
                "gold": 1,
                "silver": 1,
                "bronze": 1,
                "total": 3
            }, {
                "athlete": "Roland Schoeman",
                "age": 24,
                "country": "South Africa",
                "year": 2004,
                "date": "29/08/2004",
                "sport": "Swimming",
                "gold": 1,
                "silver": 1,
                "bronze": 1,
                "total": 3
            }, {
                "athlete": "Pieter van den Hoogenband",
                "age": 26,
                "country": "Netherlands",
                "year": 2004,
                "date": "29/08/2004",
                "sport": "Swimming",
                "gold": 1,
                "silver": 2,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Therese Alshammar",
                "age": 23,
                "country": "Sweden",
                "year": 2000,
                "date": "01/10/2000",
                "sport": "Swimming",
                "gold": 0,
                "silver": 2,
                "bronze": 1,
                "total": 3
            }, {
                "athlete": "Yana Klochkova",
                "age": 18,
                "country": "Ukraine",
                "year": 2000,
                "date": "01/10/2000",
                "sport": "Swimming",
                "gold": 2,
                "silver": 1,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Lenny Krayzelburg",
                "age": 24,
                "country": "United States",
                "year": 2000,
                "date": "01/10/2000",
                "sport": "Swimming",
                "gold": 3,
                "silver": 0,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Massimiliano Rosolino",
                "age": 22,
                "country": "Italy",
                "year": 2000,
                "date": "01/10/2000",
                "sport": "Swimming",
                "gold": 1,
                "silver": 1,
                "bronze": 1,
                "total": 3
            }, {
                "athlete": "Petria Thomas",
                "age": 25,
                "country": "Australia",
                "year": 2000,
                "date": "01/10/2000",
                "sport": "Swimming",
                "gold": 0,
                "silver": 2,
                "bronze": 1,
                "total": 3
            }, {
                "athlete": "Matt Welsh",
                "age": 23,
                "country": "Australia",
                "year": 2000,
                "date": "01/10/2000",
                "sport": "Swimming",
                "gold": 0,
                "silver": 2,
                "bronze": 1,
                "total": 3
            }, {
                "athlete": "Lee Jeong-Su",
                "age": 20,
                "country": "South Korea",
                "year": 2010,
                "date": "28/02/2010",
                "sport": "Short-Track Speed Skating",
                "gold": 2,
                "silver": 1,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Apolo Anton Ohno",
                "age": 27,
                "country": "United States",
                "year": 2010,
                "date": "28/02/2010",
                "sport": "Short-Track Speed Skating",
                "gold": 0,
                "silver": 1,
                "bronze": 2,
                "total": 3
            }, {
                "athlete": "Wang Meng",
                "age": 24,
                "country": "China",
                "year": 2010,
                "date": "28/02/2010",
                "sport": "Short-Track Speed Skating",
                "gold": 3,
                "silver": 0,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Jin Seon-Yu",
                "age": 17,
                "country": "South Korea",
                "year": 2006,
                "date": "26/02/2006",
                "sport": "Short-Track Speed Skating",
                "gold": 3,
                "silver": 0,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Lee Ho-Seok",
                "age": 19,
                "country": "South Korea",
                "year": 2006,
                "date": "26/02/2006",
                "sport": "Short-Track Speed Skating",
                "gold": 1,
                "silver": 2,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Apolo Anton Ohno",
                "age": 23,
                "country": "United States",
                "year": 2006,
                "date": "26/02/2006",
                "sport": "Short-Track Speed Skating",
                "gold": 1,
                "silver": 0,
                "bronze": 2,
                "total": 3
            }, {
                "athlete": "Wang Meng",
                "age": 20,
                "country": "China",
                "year": 2006,
                "date": "26/02/2006",
                "sport": "Short-Track Speed Skating",
                "gold": 1,
                "silver": 1,
                "bronze": 1,
                "total": 3
            }, {
                "athlete": "Marc Gagnon",
                "age": 26,
                "country": "Canada",
                "year": 2002,
                "date": "24/02/2002",
                "sport": "Short-Track Speed Skating",
                "gold": 2,
                "silver": 0,
                "bronze": 1,
                "total": 3
            }, {
                "athlete": "Yang Yang (A)",
                "age": 25,
                "country": "China",
                "year": 2002,
                "date": "24/02/2002",
                "sport": "Short-Track Speed Skating",
                "gold": 2,
                "silver": 1,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Stephanie Beckert",
                "age": 21,
                "country": "Germany",
                "year": 2010,
                "date": "28/02/2010",
                "sport": "Speed Skating",
                "gold": 1,
                "silver": 2,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Martina Sáblíková",
                "age": 22,
                "country": "Czech Republic",
                "year": 2010,
                "date": "28/02/2010",
                "sport": "Speed Skating",
                "gold": 2,
                "silver": 0,
                "bronze": 1,
                "total": 3
            }, {
                "athlete": "Enrico Fabris",
                "age": 24,
                "country": "Italy",
                "year": 2006,
                "date": "26/02/2006",
                "sport": "Speed Skating",
                "gold": 2,
                "silver": 0,
                "bronze": 1,
                "total": 3
            }, {
                "athlete": "Chad Hedrick",
                "age": 28,
                "country": "United States",
                "year": 2006,
                "date": "26/02/2006",
                "sport": "Speed Skating",
                "gold": 1,
                "silver": 1,
                "bronze": 1,
                "total": 3
            }, {
                "athlete": "Jochem Uytdehaage",
                "age": 25,
                "country": "Netherlands",
                "year": 2002,
                "date": "24/02/2002",
                "sport": "Speed Skating",
                "gold": 2,
                "silver": 1,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Sabine Völker",
                "age": 28,
                "country": "Germany",
                "year": 2002,
                "date": "24/02/2002",
                "sport": "Speed Skating",
                "gold": 0,
                "silver": 2,
                "bronze": 1,
                "total": 3
            }, {
                "athlete": "Gregor Schlierenzauer",
                "age": 20,
                "country": "Austria",
                "year": 2010,
                "date": "28/02/2010",
                "sport": "Ski Jumping",
                "gold": 1,
                "silver": 0,
                "bronze": 2,
                "total": 3
            }, {
                "athlete": "Lars Bystøl",
                "age": 27,
                "country": "Norway",
                "year": 2006,
                "date": "26/02/2006",
                "sport": "Ski Jumping",
                "gold": 1,
                "silver": 0,
                "bronze": 2,
                "total": 3
            }, {
                "athlete": "Johnny Spillane",
                "age": 29,
                "country": "United States",
                "year": 2010,
                "date": "28/02/2010",
                "sport": "Nordic Combined",
                "gold": 0,
                "silver": 3,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Felix Gottwald",
                "age": 30,
                "country": "Austria",
                "year": 2006,
                "date": "26/02/2006",
                "sport": "Nordic Combined",
                "gold": 2,
                "silver": 1,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Georg Hettich",
                "age": 27,
                "country": "Germany",
                "year": 2006,
                "date": "26/02/2006",
                "sport": "Nordic Combined",
                "gold": 1,
                "silver": 1,
                "bronze": 1,
                "total": 3
            }, {
                "athlete": "Felix Gottwald",
                "age": 26,
                "country": "Austria",
                "year": 2002,
                "date": "24/02/2002",
                "sport": "Nordic Combined",
                "gold": 0,
                "silver": 0,
                "bronze": 3,
                "total": 3
            }, {
                "athlete": "Samppa Lajunen",
                "age": 22,
                "country": "Finland",
                "year": 2002,
                "date": "24/02/2002",
                "sport": "Nordic Combined",
                "gold": 3,
                "silver": 0,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Aly Raisman",
                "age": 18,
                "country": "United States",
                "year": 2012,
                "date": "12/08/2012",
                "sport": "Gymnastics",
                "gold": 2,
                "silver": 0,
                "bronze": 1,
                "total": 3
            }, {
                "athlete": "Kohei Uchimura",
                "age": 23,
                "country": "Japan",
                "year": 2012,
                "date": "12/08/2012",
                "sport": "Gymnastics",
                "gold": 1,
                "silver": 2,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Zou Kai",
                "age": 24,
                "country": "China",
                "year": 2012,
                "date": "12/08/2012",
                "sport": "Gymnastics",
                "gold": 2,
                "silver": 0,
                "bronze": 1,
                "total": 3
            }, {
                "athlete": "Cheng Fei",
                "age": 20,
                "country": "China",
                "year": 2008,
                "date": "24/08/2008",
                "sport": "Gymnastics",
                "gold": 1,
                "silver": 0,
                "bronze": 2,
                "total": 3
            }, {
                "athlete": "Yang Wei",
                "age": 28,
                "country": "China",
                "year": 2008,
                "date": "24/08/2008",
                "sport": "Gymnastics",
                "gold": 2,
                "silver": 1,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Yang Yilin",
                "age": 15,
                "country": "China",
                "year": 2008,
                "date": "24/08/2008",
                "sport": "Gymnastics",
                "gold": 1,
                "silver": 0,
                "bronze": 2,
                "total": 3
            }, {
                "athlete": "Zou Kai",
                "age": 20,
                "country": "China",
                "year": 2008,
                "date": "24/08/2008",
                "sport": "Gymnastics",
                "gold": 3,
                "silver": 0,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Marian Dragulescu",
                "age": 23,
                "country": "Romania",
                "year": 2004,
                "date": "29/08/2004",
                "sport": "Gymnastics",
                "gold": 0,
                "silver": 1,
                "bronze": 2,
                "total": 3
            }, {
                "athlete": "Paul Hamm",
                "age": 21,
                "country": "United States",
                "year": 2004,
                "date": "29/08/2004",
                "sport": "Gymnastics",
                "gold": 1,
                "silver": 2,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Carly Patterson",
                "age": 16,
                "country": "United States",
                "year": 2004,
                "date": "29/08/2004",
                "sport": "Gymnastics",
                "gold": 1,
                "silver": 2,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Catalina Ponor",
                "age": 16,
                "country": "Romania",
                "year": 2004,
                "date": "29/08/2004",
                "sport": "Gymnastics",
                "gold": 3,
                "silver": 0,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Simona Amânar",
                "age": 20,
                "country": "Romania",
                "year": 2000,
                "date": "01/10/2000",
                "sport": "Gymnastics",
                "gold": 2,
                "silver": 0,
                "bronze": 1,
                "total": 3
            }, {
                "athlete": "Svetlana Khorkina",
                "age": 21,
                "country": "Russia",
                "year": 2000,
                "date": "01/10/2000",
                "sport": "Gymnastics",
                "gold": 1,
                "silver": 2,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Yekaterina Lobaznyuk",
                "age": 17,
                "country": "Russia",
                "year": 2000,
                "date": "01/10/2000",
                "sport": "Gymnastics",
                "gold": 0,
                "silver": 2,
                "bronze": 1,
                "total": 3
            }, {
                "athlete": "Yelena Zamolodchikova",
                "age": 17,
                "country": "Russia",
                "year": 2000,
                "date": "01/10/2000",
                "sport": "Gymnastics",
                "gold": 2,
                "silver": 1,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Guo Shuang",
                "age": 26,
                "country": "China",
                "year": 2012,
                "date": "12/08/2012",
                "sport": "Cycling",
                "gold": 0,
                "silver": 2,
                "bronze": 1,
                "total": 3
            }, {
                "athlete": "Chris Hoy",
                "age": 32,
                "country": "Great Britain",
                "year": 2008,
                "date": "24/08/2008",
                "sport": "Cycling",
                "gold": 3,
                "silver": 0,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Bradley Wiggins",
                "age": 24,
                "country": "Great Britain",
                "year": 2004,
                "date": "29/08/2004",
                "sport": "Cycling",
                "gold": 1,
                "silver": 1,
                "bronze": 1,
                "total": 3
            }, {
                "athlete": "Florian Rousseau",
                "age": 26,
                "country": "France",
                "year": 2000,
                "date": "01/10/2000",
                "sport": "Cycling",
                "gold": 2,
                "silver": 1,
                "bronze": 0,
                "total": 3
            }, {
                "athlete": "Justyna Kowalczyk",
                "age": 27,
                "country": "Poland",
                "year": 2010,
                "date": "28/02/2010",
                "sport": "Cross Country Skiing",
                "gold": 1,
                "silver": 1,
                "bronze": 1,
                "total": 3
            }, {
                "athlete": "Johan Olsson",
                "age": 29,
                "country": "Sweden",
                "year": 2010,
                "date": "28/02/2010",
                "sport": "Cross Country Skiing",
                "gold": 1,
                "silver": 0,
                "bronze": 2,
                "total": 3
            }, {
                "athlete": "Stefania Belmondo",
                "age": 33,
                "country": "Italy",
                "year": 2002,
                "date": "24/02/2002",
                "sport": "Cross Country Skiing",
                "gold": 1,
                "silver": 1,
                "bronze": 1,
                "total": 3
            }, {
                "athlete": "Yuliya Chepalova",
                "age": 25,
                "country": "Russia",
                "year": 2002,
                "date": "24/02/2002",
                "sport": "Cross Country Skiing",
                "gold": 1,
                "silver": 1,
                "bronze": 1,
                "total": 3
            }
      ];

        const datatable = [
            {
                "model": "Mercedes-AMG C63",
                "color": "Green",
                "country": "France",
                "year": 2018,
                "price": 24900
            },
            {
                "model": "Porsche 718 Boxster",
                "color": "Green",
                "country": "Ireland",
                "year": 2012,
                "price": 25200
            },
            {
                "model": "BMW M2",
                "color": "White",
                "country": "Spain",
                "year": 2003,
                "price": 20000
            },
            {
                "model": "Mercedes-AMG C63",
                "color": "Black",
                "country": "France",
                "year": 1999,
                "price": 28800
            },
            {
                "model": "Mercedes-AMG C63",
                "color": "Red",
                "country": "Spain",
                "year": 2009,
                "price": 22400
            },
            {
                "model": "Porsche 718 Boxster",
                "color": "White",
                "country": "Spain",
                "year": 2017,
                "price": 25200
            },
            {
                "model": "Mazda MX-5",
                "color": "Red",
                "country": "Spain",
                "year": 2006,
                "price": 26100
            },
            {
                "model": "Mercedes-AMG C63",
                "color": "Black",
                "country": "France",
                "year": 2017,
                "price": 27500
            },
            {
                "model": "BMW M2",
                "color": "Green",
                "country": "France",
                "year": 2009,
                "price": 24500
            },
            {
                "model": "Audi TT Roadster",
                "color": "White",
                "country": "Ireland",
                "year": 2008,
                "price": 28400
            },
            {
                "model": "BMW M3",
                "color": "Blue",
                "country": "USA",
                "year": 2017,
                "price": 21700
            },
            {
                "model": "BMW M2",
                "color": "Green",
                "country": "Ireland",
                "year": 2006,
                "price": 24200
            },
            {
                "model": "Mercedes-AMG C63",
                "color": "Green",
                "country": "Spain",
                "year": 2008,
                "price": 22600
            },
            {
                "model": "Porsche 718 Cayman",
                "color": "Blue",
                "country": "Ireland",
                "year": 2007,
                "price": 24800
            },
            {
                "model": "BMW M3",
                "color": "White",
                "country": "USA",
                "year": 2011,
                "price": 23900
            },
            {
                "model": "Porsche 718 Cayman",
                "color": "White",
                "country": "USA",
                "year": 2012,
                "price": 20100
            },
            {
                "model": "Audi TT Roadster",
                "color": "White",
                "country": "UK",
                "year": 2004,
                "price": 29500
            },
            {
                "model": "Porsche 718 Boxster",
                "color": "Green",
                "country": "France",
                "year": 2009,
                "price": 29000
            },
            {
                "model": "Porsche 718 Cayman",
                "color": "Green",
                "country": "Spain",
                "year": 2002,
                "price": 21400
            },
            {
                "model": "Mazda MX-5",
                "color": "Red",
                "country": "France",
                "year": 1999,
                "price": 29900
            },
            {
                "model": "Mazda MX-5",
                "color": "Red",
                "country": "UK",
                "year": 2010,
                "price": 25500
            },
            {
                "model": "Mercedes-AMG C63",
                "color": "Blue",
                "country": "UK",
                "year": 2013,
                "price": 25700
            },
            {
                "model": "BMW M2",
                "color": "Green",
                "country": "France",
                "year": 2004,
                "price": 23100
            },
            {
                "model": "BMW M2",
                "color": "Red",
                "country": "Spain",
                "year": 2007,
                "price": 26800
            },
            {
                "model": "Porsche 718 Cayman",
                "color": "White",
                "country": "Ireland",
                "year": 2000,
                "price": 29700
            },
            {
                "model": "Mazda MX-5",
                "color": "Red",
                "country": "France",
                "year": 2003,
                "price": 29200
            },
            {
                "model": "BMW M2",
                "color": "White",
                "country": "Spain",
                "year": 2006,
                "price": 27300
            },
            {
                "model": "Audi TT Roadster",
                "color": "Red",
                "country": "USA",
                "year": 2003,
                "price": 27700
            },
            {
                "model": "Mazda MX-5",
                "color": "Black",
                "country": "France",
                "year": 2016,
                "price": 25600
            },
            {
                "model": "Mercedes-AMG C63",
                "color": "Black",
                "country": "Spain",
                "year": 2005,
                "price": 26600
            },
            {
                "model": "Mercedes-AMG C63",
                "color": "Black",
                "country": "Ireland",
                "year": 2004,
                "price": 21100
            },
            {
                "model": "Mazda MX-5",
                "color": "Green",
                "country": "Ireland",
                "year": 2007,
                "price": 28900
            },
            {
                "model": "Porsche 718 Boxster",
                "color": "Green",
                "country": "Spain",
                "year": 2005,
                "price": 21400
            },
            {
                "model": "Porsche 718 Boxster",
                "color": "Red",
                "country": "UK",
                "year": 2008,
                "price": 20700
            },
            {
                "model": "Mazda MX-5",
                "color": "Red",
                "country": "USA",
                "year": 2014,
                "price": 26400
            },
            {
                "model": "Mercedes-AMG C63",
                "color": "Red",
                "country": "Spain",
                "year": 2012,
                "price": 20600
            },
            {
                "model": "Mercedes-AMG C63",
                "color": "Green",
                "country": "Ireland",
                "year": 2009,
                "price": 26300
            },
            {
                "model": "Porsche 718 Boxster",
                "color": "Black",
                "country": "UK",
                "year": 2000,
                "price": 23600
            },
            {
                "model": "Porsche 718 Cayman",
                "color": "White",
                "country": "UK",
                "year": 2017,
                "price": 26700
            },
            {
                "model": "Porsche 718 Boxster",
                "color": "Blue",
                "country": "USA",
                "year": 2006,
                "price": 21500
            },
            {
                "model": "Mazda MX-5",
                "color": "Blue",
                "country": "France",
                "year": 2011,
                "price": 20300
            },
            {
                "model": "Porsche 718 Boxster",
                "color": "Green",
                "country": "UK",
                "year": 2005,
                "price": 25600
            },
            {
                "model": "BMW M3",
                "color": "White",
                "country": "Spain",
                "year": 2018,
                "price": 23600
            },
            {
                "model": "BMW M3",
                "color": "Black",
                "country": "UK",
                "year": 2004,
                "price": 26100
            },
            {
                "model": "Porsche 718 Boxster",
                "color": "Blue",
                "country": "France",
                "year": 2002,
                "price": 27100
            },
            {
                "model": "Audi TT Roadster",
                "color": "Green",
                "country": "UK",
                "year": 2000,
                "price": 25100
            },
            {
                "model": "BMW M2",
                "color": "Green",
                "country": "Ireland",
                "year": 2011,
                "price": 20000
            },
            {
                "model": "BMW M3",
                "color": "Black",
                "country": "USA",
                "year": 2007,
                "price": 23900
            },
            {
                "model": "BMW M3",
                "color": "Blue",
                "country": "UK",
                "year": 2017,
                "price": 25200
            },
            {
                "model": "BMW M3",
                "color": "Red",
                "country": "UK",
                "year": 2011,
                "price": 26700
            },
            {
                "model": "Porsche 718 Boxster",
                "color": "Black",
                "country": "Ireland",
                "year": 2017,
                "price": 20600
            },
            {
                "model": "BMW M2",
                "color": "Black",
                "country": "France",
                "year": 2017,
                "price": 27800
            },
            {
                "model": "Mercedes-AMG C63",
                "color": "White",
                "country": "France",
                "year": 2016,
                "price": 24400
            },
            {
                "model": "BMW M2",
                "color": "White",
                "country": "USA",
                "year": 2012,
                "price": 28100
            },
            {
                "model": "BMW M2",
                "color": "Black",
                "country": "Ireland",
                "year": 2002,
                "price": 22900
            },
            {
                "model": "Mazda MX-5",
                "color": "Blue",
                "country": "UK",
                "year": 2009,
                "price": 26900
            },
            {
                "model": "Mazda MX-5",
                "color": "Green",
                "country": "France",
                "year": 2016,
                "price": 21500
            },
            {
                "model": "Audi TT Roadster",
                "color": "Black",
                "country": "France",
                "year": 2006,
                "price": 24800
            },
            {
                "model": "Porsche 718 Boxster",
                "color": "Blue",
                "country": "Spain",
                "year": 2018,
                "price": 23300
            },
            {
                "model": "BMW M3",
                "color": "Black",
                "country": "Spain",
                "year": 2013,
                "price": 27200
            },
            {
                "model": "Mercedes-AMG C63",
                "color": "Green",
                "country": "Spain",
                "year": 2002,
                "price": 24900
            },
            {
                "model": "Porsche 718 Boxster",
                "color": "White",
                "country": "France",
                "year": 2017,
                "price": 28300
            },
            {
                "model": "Audi TT Roadster",
                "color": "Black",
                "country": "UK",
                "year": 2018,
                "price": 20400
            },
            {
                "model": "Porsche 718 Cayman",
                "color": "Green",
                "country": "Ireland",
                "year": 2009,
                "price": 21400
            },
            {
                "model": "BMW M3",
                "color": "Black",
                "country": "USA",
                "year": 2004,
                "price": 23300
            },
            {
                "model": "Mazda MX-5",
                "color": "White",
                "country": "Spain",
                "year": 2014,
                "price": 25300
            },
            {
                "model": "Audi TT Roadster",
                "color": "Black",
                "country": "France",
                "year": 2001,
                "price": 22800
            },
            {
                "model": "BMW M3",
                "color": "Red",
                "country": "Ireland",
                "year": 2013,
                "price": 27800
            },
            {
                "model": "Audi TT Roadster",
                "color": "Black",
                "country": "USA",
                "year": 2017,
                "price": 24300
            },
            {
                "model": "Porsche 718 Cayman",
                "color": "White",
                "country": "USA",
                "year": 2000,
                "price": 22400
            },
            {
                "model": "BMW M2",
                "color": "Green",
                "country": "France",
                "year": 2014,
                "price": 29000
            },
            {
                "model": "Porsche 718 Cayman",
                "color": "Black",
                "country": "USA",
                "year": 2006,
                "price": 24700
            },
            {
                "model": "BMW M3",
                "color": "Red",
                "country": "Spain",
                "year": 2001,
                "price": 21100
            },
            {
                "model": "Porsche 718 Cayman",
                "color": "Black",
                "country": "France",
                "year": 2007,
                "price": 29200
            },
            {
                "model": "Porsche 718 Cayman",
                "color": "Blue",
                "country": "UK",
                "year": 2014,
                "price": 25800
            },
            {
                "model": "Porsche 718 Cayman",
                "color": "Black",
                "country": "UK",
                "year": 2003,
                "price": 28800
            },
            {
                "model": "BMW M2",
                "color": "White",
                "country": "Spain",
                "year": 2006,
                "price": 20400
            },
            {
                "model": "Porsche 718 Cayman",
                "color": "Green",
                "country": "France",
                "year": 2004,
                "price": 24900
            },
            {
                "model": "Porsche 718 Cayman",
                "color": "Green",
                "country": "Ireland",
                "year": 2002,
                "price": 25700
            },
            {
                "model": "BMW M3",
                "color": "Green",
                "country": "Ireland",
                "year": 2000,
                "price": 29600
            },
            {
                "model": "Mercedes-AMG C63",
                "color": "Black",
                "country": "UK",
                "year": 2003,
                "price": 29700
            },
            {
                "model": "BMW M3",
                "color": "Black",
                "country": "Spain",
                "year": 2008,
                "price": 23400
            },
            {
                "model": "Porsche 718 Boxster",
                "color": "Black",
                "country": "Ireland",
                "year": 2003,
                "price": 27200
            },
            {
                "model": "Porsche 718 Cayman",
                "color": "White",
                "country": "Spain",
                "year": 2000,
                "price": 21000
            },
            {
                "model": "Audi TT Roadster",
                "color": "Red",
                "country": "Spain",
                "year": 2008,
                "price": 22400
            },
            {
                "model": "Mercedes-AMG C63",
                "color": "Red",
                "country": "Spain",
                "year": 2014,
                "price": 23900
            },
            {
                "model": "Mercedes-AMG C63",
                "color": "Red",
                "country": "Ireland",
                "year": 2017,
                "price": 21500
            },
            {
                "model": "Mazda MX-5",
                "color": "Green",
                "country": "Spain",
                "year": 2004,
                "price": 27600
            },
            {
                "model": "Porsche 718 Boxster",
                "color": "White",
                "country": "Spain",
                "year": 2011,
                "price": 28400
            },
            {
                "model": "Porsche 718 Boxster",
                "color": "Green",
                "country": "USA",
                "year": 2004,
                "price": 21000
            },
            {
                "model": "Mazda MX-5",
                "color": "White",
                "country": "Spain",
                "year": 2002,
                "price": 26200
            },
            {
                "model": "BMW M3",
                "color": "White",
                "country": "France",
                "year": 2016,
                "price": 20000
            },
            {
                "model": "BMW M3",
                "color": "Black",
                "country": "UK",
                "year": 2010,
                "price": 27500
            },
            {
                "model": "Mercedes-AMG C63",
                "color": "Red",
                "country": "USA",
                "year": 2005,
                "price": 25300
            },
            {
                "model": "BMW M3",
                "color": "Red",
                "country": "France",
                "year": 2003,
                "price": 28300
            },
            {
                "model": "Mazda MX-5",
                "color": "Black",
                "country": "USA",
                "year": 1999,
                "price": 28000
            },
            {
                "model": "Audi TT Roadster",
                "color": "Green",
                "country": "USA",
                "year": 2002,
                "price": 26400
            },
            {
                "model": "Porsche 718 Boxster",
                "color": "Green",
                "country": "USA",
                "year": 2003,
                "price": 26800
            },
            {
                "model": "Audi TT Roadster",
                "color": "White",
                "country": "UK",
                "year": 2017,
                "price": 29000
            },
            {
                "model": "Porsche 718 Boxster",
                "color": "Blue",
                "country": "Spain",
                "year": 2001,
                "price": 28600
            },
            {
                "model": "BMW M2",
                "color": "Red",
                "country": "UK",
                "year": 2005,
                "price": 24200
            },
            {
                "model": "Mazda MX-5",
                "color": "Green",
                "country": "Spain",
                "year": 2014,
                "price": 25500
            },
            {
                "model": "BMW M3",
                "color": "Red",
                "country": "Ireland",
                "year": 2003,
                "price": 24700
            },
            {
                "model": "Mercedes-AMG C63",
                "color": "Green",
                "country": "USA",
                "year": 2018,
                "price": 24200
            },
            {
                "model": "Mercedes-AMG C63",
                "color": "Blue",
                "country": "France",
                "year": 2005,
                "price": 28900
            },
            {
                "model": "Mazda MX-5",
                "color": "Black",
                "country": "UK",
                "year": 2008,
                "price": 23000
            },
            {
                "model": "Mazda MX-5",
                "color": "Green",
                "country": "USA",
                "year": 2006,
                "price": 29700
            },
            {
                "model": "Audi TT Roadster",
                "color": "Red",
                "country": "Spain",
                "year": 2003,
                "price": 22500
            },
            {
                "model": "BMW M3",
                "color": "White",
                "country": "Ireland",
                "year": 2011,
                "price": 23500
            },
            {
                "model": "Audi TT Roadster",
                "color": "Green",
                "country": "USA",
                "year": 2014,
                "price": 26200
            },
            {
                "model": "BMW M3",
                "color": "Red",
                "country": "Spain",
                "year": 2002,
                "price": 22100
            },
            {
                "model": "Mazda MX-5",
                "color": "Red",
                "country": "France",
                "year": 2017,
                "price": 28500
            },
            {
                "model": "Mercedes-AMG C63",
                "color": "Red",
                "country": "France",
                "year": 2014,
                "price": 22100
            },
            {
                "model": "Mazda MX-5",
                "color": "Green",
                "country": "UK",
                "year": 2006,
                "price": 23100
            },
            {
                "model": "Mazda MX-5",
                "color": "Black",
                "country": "Ireland",
                "year": 2007,
                "price": 28300
            },
            {
                "model": "Audi TT Roadster",
                "color": "Red",
                "country": "USA",
                "year": 2010,
                "price": 28900
            },
            {
                "model": "Porsche 718 Cayman",
                "color": "Red",
                "country": "France",
                "year": 2002,
                "price": 29400
            },
            {
                "model": "Porsche 718 Cayman",
                "color": "Red",
                "country": "Ireland",
                "year": 2010,
                "price": 23200
            },
            {
                "model": "Porsche 718 Boxster",
                "color": "Green",
                "country": "Spain",
                "year": 2010,
                "price": 24100
            },
            {
                "model": "Porsche 718 Boxster",
                "color": "Black",
                "country": "USA",
                "year": 2006,
                "price": 21400
            },
            {
                "model": "BMW M2",
                "color": "Black",
                "country": "Ireland",
                "year": 2013,
                "price": 29800
            },
            {
                "model": "Porsche 718 Boxster",
                "color": "Blue",
                "country": "Spain",
                "year": 2002,
                "price": 28900
            },
            {
                "model": "Porsche 718 Boxster",
                "color": "Blue",
                "country": "France",
                "year": 2010,
                "price": 22000
            },
            {
                "model": "BMW M3",
                "color": "Red",
                "country": "USA",
                "year": 1999,
                "price": 25500
            },
            {
                "model": "Audi TT Roadster",
                "color": "Black",
                "country": "USA",
                "year": 2008,
                "price": 24800
            },
            {
                "model": "Porsche 718 Cayman",
                "color": "Green",
                "country": "Ireland",
                "year": 2006,
                "price": 28500
            },
            {
                "model": "BMW M2",
                "color": "White",
                "country": "France",
                "year": 2012,
                "price": 25000
            },
            {
                "model": "Porsche 718 Cayman",
                "color": "Green",
                "country": "Spain",
                "year": 2000,
                "price": 21800
            },
            {
                "model": "Mercedes-AMG C63",
                "color": "Black",
                "country": "France",
                "year": 2001,
                "price": 21100
            },
            {
                "model": "Porsche 718 Boxster",
                "color": "Green",
                "country": "Spain",
                "year": 2000,
                "price": 21300
            },
            {
                "model": "Audi TT Roadster",
                "color": "Green",
                "country": "Spain",
                "year": 2011,
                "price": 21000
            },
            {
                "model": "Mazda MX-5",
                "color": "Blue",
                "country": "UK",
                "year": 1999,
                "price": 24700
            },
            {
                "model": "Porsche 718 Cayman",
                "color": "Green",
                "country": "France",
                "year": 2017,
                "price": 23400
            },
            {
                "model": "BMW M2",
                "color": "Green",
                "country": "UK",
                "year": 2002,
                "price": 27000
            },
            {
                "model": "BMW M3",
                "color": "Red",
                "country": "Spain",
                "year": 2002,
                "price": 26400
            },
            {
                "model": "Mercedes-AMG C63",
                "color": "Red",
                "country": "France",
                "year": 2011,
                "price": 21800
            },
            {
                "model": "BMW M2",
                "color": "Blue",
                "country": "Spain",
                "year": 2018,
                "price": 28000
            },
            {
                "model": "Porsche 718 Boxster",
                "color": "Green",
                "country": "Spain",
                "year": 2017,
                "price": 27000
            },
            {
                "model": "Mazda MX-5",
                "color": "Green",
                "country": "UK",
                "year": 2003,
                "price": 21900
            },
            {
                "model": "Mazda MX-5",
                "color": "Red",
                "country": "Spain",
                "year": 2009,
                "price": 29000
            },
            {
                "model": "Porsche 718 Boxster",
                "color": "Red",
                "country": "Ireland",
                "year": 2010,
                "price": 24600
            },
            {
                "model": "Porsche 718 Boxster",
                "color": "Blue",
                "country": "Spain",
                "year": 2001,
                "price": 24500
            },
            {
                "model": "Audi TT Roadster",
                "color": "Red",
                "country": "Spain",
                "year": 2008,
                "price": 25700
            },
            {
                "model": "Porsche 718 Cayman",
                "color": "Red",
                "country": "USA",
                "year": 2007,
                "price": 28800
            },
            {
                "model": "BMW M3",
                "color": "Black",
                "country": "Spain",
                "year": 2011,
                "price": 25500
            },
            {
                "model": "BMW M2",
                "color": "Red",
                "country": "Ireland",
                "year": 2003,
                "price": 28100
            },
            {
                "model": "BMW M2",
                "color": "Black",
                "country": "UK",
                "year": 2017,
                "price": 23400
            },
            {
                "model": "Mercedes-AMG C63",
                "color": "White",
                "country": "France",
                "year": 2001,
                "price": 29000
            },
            {
                "model": "BMW M3",
                "color": "Green",
                "country": "Ireland",
                "year": 1999,
                "price": 29600
            },
            {
                "model": "Porsche 718 Cayman",
                "color": "Green",
                "country": "Ireland",
                "year": 2017,
                "price": 24700
            },
            {
                "model": "Mercedes-AMG C63",
                "color": "Black",
                "country": "Ireland",
                "year": 2006,
                "price": 22900
            },
            {
                "model": "BMW M3",
                "color": "Green",
                "country": "UK",
                "year": 2010,
                "price": 21300
            },
            {
                "model": "BMW M2",
                "color": "Red",
                "country": "France",
                "year": 2012,
                "price": 26300
            },
            {
                "model": "Porsche 718 Cayman",
                "color": "White",
                "country": "USA",
                "year": 2010,
                "price": 22000
            },
            {
                "model": "Porsche 718 Cayman",
                "color": "Black",
                "country": "France",
                "year": 2013,
                "price": 25600
            },
            {
                "model": "BMW M3",
                "color": "Red",
                "country": "UK",
                "year": 2004,
                "price": 21900
            },
            {
                "model": "BMW M2",
                "color": "Blue",
                "country": "France",
                "year": 2015,
                "price": 25400
            },
            {
                "model": "BMW M3",
                "color": "Green",
                "country": "USA",
                "year": 2016,
                "price": 25300
            },
            {
                "model": "Porsche 718 Cayman",
                "color": "Blue",
                "country": "France",
                "year": 2016,
                "price": 26000
            },
            {
                "model": "Porsche 718 Cayman",
                "color": "Red",
                "country": "UK",
                "year": 2005,
                "price": 29200
            },
            {
                "model": "Audi TT Roadster",
                "color": "Green",
                "country": "Ireland",
                "year": 2014,
                "price": 29800
            },
            {
                "model": "Audi TT Roadster",
                "color": "Blue",
                "country": "France",
                "year": 2005,
                "price": 29900
            },
            {
                "model": "Audi TT Roadster",
                "color": "Green",
                "country": "France",
                "year": 2012,
                "price": 22600
            },
            {
                "model": "Porsche 718 Cayman",
                "color": "Green",
                "country": "France",
                "year": 2012,
                "price": 23100
            },
            {
                "model": "Porsche 718 Boxster",
                "color": "White",
                "country": "UK",
                "year": 2000,
                "price": 21800
            },
            {
                "model": "Mercedes-AMG C63",
                "color": "Blue",
                "country": "USA",
                "year": 2005,
                "price": 22200
            },
            {
                "model": "Audi TT Roadster",
                "color": "Black",
                "country": "France",
                "year": 2005,
                "price": 28600
            },
            {
                "model": "Mercedes-AMG C63",
                "color": "Black",
                "country": "UK",
                "year": 1999,
                "price": 20200
            },
            {
                "model": "BMW M2",
                "color": "Blue",
                "country": "Ireland",
                "year": 2003,
                "price": 29000
            },
            {
                "model": "Audi TT Roadster",
                "color": "Blue",
                "country": "France",
                "year": 2014,
                "price": 28700
            },
            {
                "model": "Mazda MX-5",
                "color": "White",
                "country": "USA",
                "year": 2005,
                "price": 24700
            },
            {
                "model": "Mercedes-AMG C63",
                "color": "Blue",
                "country": "UK",
                "year": 2000,
                "price": 25500
            },
            {
                "model": "Porsche 718 Cayman",
                "color": "White",
                "country": "France",
                "year": 2009,
                "price": 23600
            },
            {
                "model": "Mercedes-AMG C63",
                "color": "Green",
                "country": "UK",
                "year": 2005,
                "price": 28000
            },
            {
                "model": "Porsche 718 Cayman",
                "color": "Red",
                "country": "France",
                "year": 2006,
                "price": 29700
            },
            {
                "model": "Porsche 718 Cayman",
                "color": "Black",
                "country": "USA",
                "year": 2011,
                "price": 29100
            },
            {
                "model": "Mercedes-AMG C63",
                "color": "White",
                "country": "Spain",
                "year": 2000,
                "price": 25700
            },
            {
                "model": "Porsche 718 Boxster",
                "color": "Black",
                "country": "Spain",
                "year": 2013,
                "price": 28000
            },
            {
                "model": "Mercedes-AMG C63",
                "color": "White",
                "country": "Spain",
                "year": 1999,
                "price": 22000
            },
            {
                "model": "Audi TT Roadster",
                "color": "White",
                "country": "UK",
                "year": 2015,
                "price": 23000
            },
            {
                "model": "Mazda MX-5",
                "color": "Black",
                "country": "Spain",
                "year": 2009,
                "price": 27300
            },
            {
                "model": "BMW M2",
                "color": "Red",
                "country": "Spain",
                "year": 2011,
                "price": 20400
            },
            {
                "model": "Porsche 718 Boxster",
                "color": "White",
                "country": "France",
                "year": 1999,
                "price": 24200
            },
            {
                "model": "Mazda MX-5",
                "color": "White",
                "country": "Spain",
                "year": 1999,
                "price": 24000
            },
            {
                "model": "BMW M2",
                "color": "Red",
                "country": "Spain",
                "year": 2005,
                "price": 28400
            },
            {
                "model": "BMW M3",
                "color": "White",
                "country": "UK",
                "year": 2015,
                "price": 29500
            },
            {
                "model": "Porsche 718 Cayman",
                "color": "Blue",
                "country": "France",
                "year": 1999,
                "price": 26600
            },
            {
                "model": "Porsche 718 Cayman",
                "color": "White",
                "country": "France",
                "year": 2012,
                "price": 29500
            },
            {
                "model": "Mazda MX-5",
                "color": "Black",
                "country": "Spain",
                "year": 2003,
                "price": 23900
            },
            {
                "model": "Mercedes-AMG C63",
                "color": "Green",
                "country": "France",
                "year": 2016,
                "price": 28600
            },
            {
                "model": "BMW M2",
                "color": "White",
                "country": "USA",
                "year": 1999,
                "price": 29600
            },
            {
                "model": "Porsche 718 Boxster",
                "color": "Green",
                "country": "France",
                "year": 2001,
                "price": 23400
            },
            {
                "model": "Porsche 718 Cayman",
                "color": "Black",
                "country": "UK",
                "year": 2014,
                "price": 20300
            },
            {
                "model": "Porsche 718 Boxster",
                "color": "Red",
                "country": "France",
                "year": 2010,
                "price": 20000
            },
            {
                "model": "Porsche 718 Cayman",
                "color": "Blue",
                "country": "UK",
                "year": 2013,
                "price": 28000
            },
            {
                "model": "Mercedes-AMG C63",
                "color": "Green",
                "country": "USA",
                "year": 2009,
                "price": 25600
            },
            {
                "model": "Mercedes-AMG C63",
                "color": "Blue",
                "country": "France",
                "year": 1999,
                "price": 27700
            },
            {
                "model": "Mazda MX-5",
                "color": "White",
                "country": "France",
                "year": 2010,
                "price": 23700
            },
            {
                "model": "Porsche 718 Cayman",
                "color": "Red",
                "country": "Spain",
                "year": 2010,
                "price": 20300
            },
            {
                "model": "Mazda MX-5",
                "color": "Green",
                "country": "Spain",
                "year": 2010,
                "price": 26400
            }
        ];

        const mycourses = [
            'assets/api/images/courses/courses1.jpg',
            'assets/api/images/courses/courses2.jpg',
            'assets/api/images/courses/courses3.jpg',
            'assets/api/images/courses/courses4.jpg',
            'assets/api/images/courses/courses5.jpg',
            'assets/api/images/courses/courses6.jpg'
        ];

        const allcoursesimg = [
            'assets/api/images/allcourses/a1.jpg',
            'assets/api/images/allcourses/a2.jpg',
            'assets/api/images/allcourses/a3.jpg',
            'assets/api/images/allcourses/a4.jpg',
            'assets/api/images/allcourses/a5.jpg',
            'assets/api/images/allcourses/a6.jpg',
            'assets/api/images/allcourses/a7.jpg',
            'assets/api/images/allcourses/a8.jpg',
            'assets/api/images/allcourses/a9.jpg',
            'assets/api/images/allcourses/a10.jpg',
            // 'assets/api/images/allcourses/a11.jpg',
            'assets/api/images/allcourses/a12.jpg',
            'assets/api/images/allcourses/a13.jpg',
            'assets/api/images/allcourses/a14.jpg',
            'assets/api/images/allcourses/a15.jpg',
            'assets/api/images/allcourses/a16.jpg',
            'assets/api/images/allcourses/a17.jpg',
            'assets/api/images/allcourses/a18.jpg',
            'assets/api/images/allcourses/a19.jpg',
            'assets/api/images/allcourses/a20.jpg',
            'assets/api/images/allcourses/a21.jpg',
            'assets/api/images/allcourses/a22.jpg',
            'assets/api/images/allcourses/a23.jpg',
            // 'assets/api/images/allcourses/a24.jpg',
            'assets/api/images/allcourses/a25.jpg',
            'assets/api/images/allcourses/a26.jpg',
            'assets/api/images/allcourses/a27.jpg',
            'assets/api/images/allcourses/a28.jpg',
            'assets/api/images/allcourses/a29.jpg',
            'assets/api/images/allcourses/a30.jpg',
            'assets/api/images/allcourses/a31.jpg',
            'assets/api/images/allcourses/a32.jpg',
            'assets/api/images/allcourses/a33.jpg',
            'assets/api/images/allcourses/x1.jpg',
            'assets/api/images/allcourses/x2.jpg',
            'assets/api/images/allcourses/x2.jpg',
            'assets/api/images/allcourses/x3.jpg',
            'assets/api/images/allcourses/x4.jpg',
            'assets/api/images/allcourses/x5.jpg',
            'assets/api/images/allcourses/x6.jpg',
            'assets/api/images/allcourses/x7.jpg',
            'assets/api/images/allcourses/x8.jpg',
            'assets/api/images/allcourses/x9.jpg',
            'assets/api/images/allcourses/x10.jpg',
            'assets/api/images/allcourses/x11.jpg',
        ];

        const recommendedimg = [
            'assets/api/images/allcourses/t1.jpg',
            'assets/api/images/allcourses/t2.jpg',
            'assets/api/images/allcourses/t3.jpg',
            'assets/api/images/allcourses/t4.jpg',
            'assets/api/images/allcourses/t5.jpg',
        ];

        const recommededNewIng = [
            'assets/api/images/allcourses/x1.jpg',
            'assets/api/images/allcourses/x2.jpg',
            'assets/api/images/allcourses/x2.jpg',
            'assets/api/images/allcourses/x3.jpg',
            'assets/api/images/allcourses/x4.jpg',
            'assets/api/images/allcourses/x5.jpg',
            'assets/api/images/allcourses/x6.jpg',
            'assets/api/images/allcourses/x7.jpg',
            'assets/api/images/allcourses/x8.jpg',
            'assets/api/images/allcourses/x9.jpg',
            'assets/api/images/allcourses/x10.jpg',
            'assets/api/images/allcourses/x11.jpg',
        ];

        const authorcourses = [
            'assets/api/images/author/au1.jpg',
            'assets/api/images/author/au2.jpg',
            'assets/api/images/author/au3.jpg',
            'assets/api/images/author/au4.jpg',
            'assets/api/images/author/au5.jpg',
            'assets/api/images/author/au6.jpg'
        ];

        return {
            carousel,
            hometable,
            datatable,
            mycourses,
            allcoursesimg,
            recommendedimg,
            recommededNewIng,
            authorcourses
        };
    }
}
