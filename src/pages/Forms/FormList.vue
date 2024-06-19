<template>
    <div class="container mb-5">
        <div class="section-header mb-4">
          <h4 class="section-title text-muted font-weight-normal">
            List of form that you can response
          </h4>
        </div>

        <div class="section-body">
          <article class="spot">
            <div class="row">
              <div class="col-9">
                <h5 class="text-primary">
                  Form Name <span class="badge bg-success">Public</span>
                </h5>
                <div class="text-muted">0 respondens</div>
                <div class="text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam, delectus.
                </div>
              </div>
              <div class="col-3">
                <button class="btn btn-success btn-lg btn-block">
                  Response / Detail
                </button>
              </div>
            </div>
          </article>
          <article class="spot">
            <div class="row">
              <div class="col-9">
                <h5 class="text-primary">
                  Form Name <span class="badge bg-info">Private</span>
                </h5>
                <div class="text-muted">0 respondens</div>
                <div class="text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam, delectus.
                </div>
              </div>
              <div class="col-3">
                <button class="btn btn-success btn-lg btn-block">
                  Response / Detail
                </button>
              </div>
            </div>
          </article>
          <article class="spot unavailable">
            <div class="row">
              <div class="col-9">
                <h5 class="text-primary">
                  Form Name <span class="badge bg-success">Public</span>
                </h5>
                <div class="text-muted">0 respondens</div>
                <div class="text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam, delectus.
                </div>
              </div>
              <div class="col-3">
                <button class="btn btn-danger btn-lg btn-block">
                  Form already expired
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
</template>