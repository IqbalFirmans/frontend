<template>
    <!-- S: My Response Section -->
    <section class="response-section mb-5">
        <div class="section-header mb-3">
            <div class="row">
                <div class="col-md-8">
                    <h4 class="section-title text-muted">My Response</h4>
                </div>
                <div class="col-md-4">
                    <RouterLink to="form" class="btn btn-primary btn-lg btn-block">+ Response to Form</RouterLink>
                </div>
            </div>
        </div>
        <div class="section-body">
            <div class="row mb-4">

                <!-- S: Not has response yet -->
                <div class="col-md-12">
                    <div class="alert alert-warning">
                        You don't have any response to form yet
                    </div>
                </div>
                <!-- E: Not has response yet -->

                <!-- S: Form Response Section -->
                <div class="col-md-6">
                    <div class="card card-default">
                        <div class="card-header border-0 d-flex justify-content-between align-items-center">
                            <h5 class="mb-0">Form Name</h5>
                            <div><span class="badge bg-success">Public</span></div>
                        </div>
                        <div class="card-body p-0">
                            <table class="table table-striped mb-0">
                                <tr>
                                    <th>Address</th>
                                    <td class="text-muted">Jln. HOS. Cjokroaminoto (Pasirkaliki) No. 900, DKI Jakarta
                                    </td>
                                </tr>
                                <tr>
                                    <th>Question 1</th>
                                    <td class="text-muted">Answer 1</td>
                                </tr>
                                <tr>
                                    <th>Question 2</th>
                                    <td class="text-muted">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        Reprehenderit, quidem. Aliquam id inventore deserunt voluptatum!</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <!-- S: Form Response Section -->
                <!-- S: Form Response Section -->
                <div class="col-md-6">
                    <div class="card card-default">
                        <div class="card-header border-0 d-flex justify-content-between align-items-center">
                            <h5 class="mb-0">Form Name</h5>
                            <div><span class="badge bg-info">Private</span></div>
                        </div>
                        <div class="card-body p-0">
                            <table class="table table-striped mb-0">
                                <tr>
                                    <th>Address</th>
                                    <td class="text-muted">Jln. HOS. Cjokroaminoto (Pasirkaliki) No. 900, DKI Jakarta
                                    </td>
                                </tr>
                                <tr>
                                    <th>Question 1</th>
                                    <td class="text-muted">Answer 1</td>
                                </tr>
                                <tr>
                                    <th>Question 2</th>
                                    <td class="text-muted">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        Reprehenderit, quidem. Aliquam id inventore deserunt voluptatum!</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <!-- S: Form Response Section -->

            </div>

        </div>
    </section>
    <!-- E: My Response Section -->
</template>

<script>
</script>