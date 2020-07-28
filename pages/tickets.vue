<template>
  <div>
    <!-- Form Ticketing -->
    <form>
      <div class="container">
        <div class="card mx-5 mt-5 p-5">
          <div class="card-body">
            <h2>Form Ticketing</h2>
            <div class="booking-form">
              <div class="row">
                <div class="col-6">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Masukkan nama lengkap Anda"
                    />
                    <label class="form-label" for="fullname"
                      >Nama Lengkap</label
                    >
                  </div>
                </div>
                <div class="col-5">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="text"
                      placeholder="Masukkan nomor telepon Anda"
                    />
                    <label class="form-label" for="phone">Nomor Telepon</label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-8">
                  <div class="form-group">
                    <input
                      id="exampleInputEmail1"
                      type="email"
                      class="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Masukkan alamat e-mail Anda"
                    />
                    <label class="form-label" for="exampleInputEmail1"
                      >E-mail</label
                    >
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <div class="form-group">
                    <input class="form-control" type="text" />
                    <label class="form-label" for="fullname">Kota Asal</label>
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <input class="form-control" type="text" />
                    <label class="form-label" for="phone">Kota Tujuan</label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-4">
                  <div class="form-group">
                    <input class="form-control" type="date" />
                    <label class="form-label" for="fullname"
                      >Tanggal Pergi</label
                    >
                  </div>
                </div>
                <div class="col-4">
                  <div class="form-group">
                    <input class="form-control" type="date" />
                    <label class="form-label" for="phone">Tanggal Pulang</label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-3">
                  <div class="form-check form-check-inline">
                    <input
                      id="inlineRadio1"
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      value="option1"
                    />
                    <label class="form-check-label" for="inlineRadio1"
                      >Pulang Pergi</label
                    >
                  </div>
                </div>
                <div class="col-3">
                  <div class="form-check form-check-inline">
                    <input
                      id="inlineRadio1"
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      value="option2"
                    />
                    <label class="form-check-label" for="inlineRadio1"
                      >Sekali jalan</label
                    >
                  </div>
                </div>
                <div class="col-3">
                  <button type="submit" class="btn btn-primary">
                    Submit Form
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style>
#booking {
  font-family: 'Montserrat', sans-serif;
  background-image: url('/img/bg-img/slider2home.jpeg');
  background-size: cover;
  background-position: center;
  font-weight: 300;
}

.booking-form {
  background: #fff;
  padding: 30px 15px 0px;
  border-radius: 4px;
  overflow: auto;
}

.booking-form .form-group {
  position: relative;
  margin-bottom: 10px;
}

.booking-form .form-control {
  border: none;
  height: 40px;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-size: 20px;
  color: #090a0b;
  font-weight: 300;
  background: #f2f1f1;
  border-radius: 4px;
}

.booking-form .form-control::-webkit-input-placeholder {
  color: #b1b6bd;
}

.booking-form .form-control:-ms-input-placeholder {
  color: #b1b6bd;
}

.booking-form .form-control::placeholder {
  color: #b1b6bd;
}

.booking-form input[type='date'].form-control:invalid {
  color: #b1b6bd;
}

.booking-form select.form-control {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.booking-form select.form-control + .select-arrow {
  position: absolute;
  right: 0px;
  top: 0px;
  width: 24px;
  text-align: center;
  pointer-events: none;
  height: 40px;
  line-height: 65px;
  color: #b1b6bd;
  font-size: 14px;
}

.booking-form select.form-control + .select-arrow:after {
  content: '\279C';
  display: block;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}

.booking-form .form-label {
  color: #184c8f;
  display: block;
  font-weight: 600;
  height: 25px;
  line-height: 25px;
  font-size: 16px;
  position: relative;
  margin-top: 10px;
  text-transform: uppercase;
}

.booking-form .form-label:after {
  content: '';
  position: absolute;
  left: 10px;
  top: -10px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 10px 0 10px;
  border-color: #f2f1f1 transparent transparent transparent;
}

.booking-form .form-btn {
  margin-bottom: 30px;
}

.booking-form .submit-btn {
  background: #184c8f;
  border: none;
  font-weight: 600;
  text-transform: uppercase;
  height: 90px;
  font-size: 20px;
  width: 100%;
  color: #fff;
  border-radius: 4px;
  display: block;
}
</style>
