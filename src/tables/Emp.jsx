import React from 'react'

class Emp extends React.Component {
    constructor(props){
        super(props);
        this.state={
            emp:[{"id":1,"name":"Dion","email":"dsaterweyte0@buzzfeed.com","gender":"Bigender"},
            {"id":2,"name":"Tam","email":"telie1@goodreads.com","gender":"Agender"},
            {"id":3,"name":"Xylina","email":"xpapaccio2@dedecms.com","gender":"Male"},
            {"id":4,"name":"Sofie","email":"sjinkins3@oaic.gov.au","gender":"Genderqueer"},
            {"id":5,"name":"Felicia","email":"fpunt4@deliciousdays.com","gender":"Non-binary"},
            {"id":6,"name":"Kennith","email":"kdrissell5@aol.com","gender":"Polygender"},
            {"id":7,"name":"Byrle","email":"bburgum6@ucla.edu","gender":"Male"},
            {"id":8,"name":"Sheila","email":"scochrane7@hud.gov","gender":"Agender"},
            {"id":9,"name":"Ford","email":"fmckintosh8@infoseek.co.jp","gender":"Male"},
            {"id":10,"name":"Rad","email":"rwheadon9@drupal.org","gender":"Non-binary"},
            {"id":11,"name":"Devy","email":"dreisena@mlb.com","gender":"Genderfluid"},
            {"id":12,"name":"Pauli","email":"ptunneyb@google.com.au","gender":"Male"},
            {"id":13,"name":"Fern","email":"fbusekc@wikia.com","gender":"Genderfluid"},
            {"id":14,"name":"Olympie","email":"odenfordd@usa.gov","gender":"Bigender"},
            {"id":15,"name":"Grace","email":"gpielee@dailymotion.com","gender":"Genderqueer"},
            {"id":16,"name":"Kylie","email":"kcalderof@hexun.com","gender":"Agender"},
            {"id":17,"name":"Svend","email":"smacailineg@lycos.com","gender":"Agender"},
            {"id":18,"name":"Chancey","email":"cbonaviah@blinklist.com","gender":"Female"},
            {"id":19,"name":"Lem","email":"lhumberstoni@merriam-webster.com","gender":"Polygender"},
            {"id":20,"name":"Lucius","email":"lmebesj@livejournal.com","gender":"Agender"},
            {"id":21,"name":"Essie","email":"etruswellk@multiply.com","gender":"Male"},
            {"id":22,"name":"Hagen","email":"hhedditchl@hud.gov","gender":"Non-binary"},
            {"id":23,"name":"Darda","email":"dsiggerym@freewebs.com","gender":"Genderfluid"},
            {"id":24,"name":"Liam","email":"lsuattn@blogtalkradio.com","gender":"Genderfluid"},
            {"id":25,"name":"Bibbie","email":"bkirmano@drupal.org","gender":"Genderfluid"},
            {"id":26,"name":"Cinnamon","email":"cmaudettp@omniture.com","gender":"Agender"},
            {"id":27,"name":"Alanna","email":"abrabenq@nbcnews.com","gender":"Female"},
            {"id":28,"name":"Odey","email":"oharvettr@flickr.com","gender":"Non-binary"},
            {"id":29,"name":"Doretta","email":"dgaifords@businesswire.com","gender":"Female"},
            {"id":30,"name":"Maurits","email":"mpywellt@meetup.com","gender":"Bigender"},
            {"id":31,"name":"Konstanze","email":"kgriffittu@list-manage.com","gender":"Polygender"},
            {"id":32,"name":"Burl","email":"bwedlakev@joomla.org","gender":"Agender"},
            {"id":33,"name":"Nonie","email":"nnelthorpw@seattletimes.com","gender":"Agender"},
            {"id":34,"name":"Pearl","email":"pllewellenx@blogspot.com","gender":"Agender"},
            {"id":35,"name":"Evvy","email":"espehry@smh.com.au","gender":"Agender"},
            {"id":36,"name":"Myrta","email":"mmacandreisz@cargocollective.com","gender":"Genderqueer"},
            {"id":37,"name":"Rhiamon","email":"rbrawley10@toplist.cz","gender":"Genderfluid"},
            {"id":38,"name":"Billie","email":"bnassie11@spiegel.de","gender":"Male"},
            {"id":39,"name":"Kali","email":"kairds12@about.me","gender":"Polygender"},
            {"id":40,"name":"Madlin","email":"mrahill13@alexa.com","gender":"Genderqueer"},
            {"id":41,"name":"Emanuel","email":"estaintonskinn14@bbc.co.uk","gender":"Genderfluid"},
            {"id":42,"name":"Malissa","email":"mkloss15@netscape.com","gender":"Genderfluid"},
            {"id":43,"name":"Fleur","email":"fbache16@ovh.net","gender":"Polygender"},
            {"id":44,"name":"Carmelle","email":"cdanihel17@independent.co.uk","gender":"Male"},
            {"id":45,"name":"Nettle","email":"nfipp18@intel.com","gender":"Agender"},
            {"id":46,"name":"Gaspard","email":"gcarneck19@discuz.net","gender":"Bigender"},
            {"id":47,"name":"Harmonia","email":"hellif1a@army.mil","gender":"Polygender"},
            {"id":48,"name":"Tanner","email":"tsacher1b@google.com.br","gender":"Bigender"},
            {"id":49,"name":"Nicholle","email":"nrosin1c@blogspot.com","gender":"Non-binary"},
            {"id":50,"name":"Hedvige","email":"hrusk1d@geocities.jp","gender":"Genderqueer"}]
        }
}
    render(){
        return(
        <>
<div className="container mt-4">
    <div className="row">
        <div className="col-md-8">
            <table className="table table-hover">
                <thead>
                <tr>
                   <th>id</th>
                   <th>name</th>
                   <th>email</th>
                   <th>gender</th>
                </tr>
                </thead>
                <tbody>
                    {this.state.emp.map((emp)=>{
                        return(
                        <tr>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.gender}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>
</div>


        </>)
    }
}
export default Emp;