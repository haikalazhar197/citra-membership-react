import React from "react";

const Registration = () => {
  return (
    <div>
       <div className = "container">
        <form>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" />
        </div>

        <div class="form-group">
          <label for="age">Age</label>
          <input type="text" class="form-control" id="age" />
        </div>

        <div class="form-group">
          <label for="matricNo">Matric Number</label>
          <input type="text" class="form-control" id="matricNo" />
        </div>
        
        <label for="kulliyah">Kulliyah</label>
        <select class="form-control">
          <option>Please select your Kulliyah</option>
          <option>KOE</option>
          <option>KICT</option>
          <option>KOED</option>
          <option>IRKHS</option>
          <option>KENMS</option>
          <option>AIKOL</option>
        </select>

        <label for="course">Course</label>
        <select class="form-control">
          <option>Please select your course</option>
          <option>BCS</option>
          <option>BIT</option>
          <option>MECHATRONIC</option>
          <option>MECHA</option>
          <option>MANU</option>
          <option>SYARIAH</option>
        </select>

        <div class="form-group">
          <label for="intru">Instrument</label>
          <input type="text" class="form-control" id="instru" />
        </div>

        <div class = "form-group position">
          <label for="position" class = "border-bottom">Position</label>
          <br/>
          <input class="form-check-input " type="radio" name="pres" id="position" value="option1"/>
          <label class="form-check-label " for="1">President</label>
        </div>
        <div class = "form-group position">
          <input class="form-check-input" type="radio" name="vp1" id="position" value="option2"/>
          <label class="form-check-label" for="2">Vice President 1</label>
        </div> 
        <div class = "form-group position">
          <input class="form-check-input" type="radio" name="vp1" id="position" value="option3" checked/>
          <label class="form-check-label" for="3">Members</label>
        </div>

        <label for="club">Club</label>
        <select class="form-control">
          <option>Please select a club</option>
          <option>IAB</option>
          <option>GGM</option>
          <option>ANDEKA</option>
          <option>ANGKLUNG</option>
          <option>NAFASTARI</option>
        </select>

        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>

        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1"/>
        </div>


        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
