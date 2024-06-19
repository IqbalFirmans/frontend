<template>
    <div class="container">
        <div class="row my-3">
          <div class="col-md-4 col-12">
            <div class="form-group">
              <h5>Type</h5>
              <span class="badge bg-primary">public</span>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="form-group">
              <h5>Expired</h5>
              2024-03-29
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="form-group">
              <h5>Allowed Domain</h5>
              gmail.com, yahoo.com
            </div>
          </div>
        </div>

        <div class="row mb-3">
          <div class="col-md-12">
            <div class="form-group">
              <h3>Question</h3>
              <form action="#">
                <div class="form-group mb-3">
                  <label
                    >Question text <span class="text-danger">*</span></label
                  >
                  <input
                    type="text"
                    placeholder="description 1"
                    class="form-control"
                    required
                  />
                </div>
                <div class="form-group mb-3">
                  <label>Question number</label>
                  <input
                    type="number"
                    placeholder="description 2"
                    class="form-control"
                  />
                </div>
                <div class="form-group mb-3">
                  <label
                    >Question textarea <span class="text-danger">*</span></label
                  >
                  <textarea
                    placeholder="description 3"
                    class="form-control"
                    required
                  ></textarea>
                </div>
                <div class="form-group mb-3">
                  <label>Question checkbox</label>
                  <div class="d-flex justify-content-between">
                    <div class="input-group">
                      <input type="checkbox" class="me-2" />
                      <label> Option 1</label>
                    </div>
                    <div class="input-group">
                      <input type="checkbox" class="me-2" />
                      <label> Option 2</label>
                    </div>
                    <div class="input-group">
                      <input type="checkbox" class="me-2" />
                      <label> Option 3</label>
                    </div>
                  </div>
                </div>
                <div class="form-group mb-3">
                  <label>Question select</label>
                  <select class="form-select">
                    <option value="1">option 1</option>
                    <option value="2">option 2</option>
                  </select>
                </div>
                <button class="btn btn-primary w-100">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
</template>