<!doctype html>
<html lang="en">

<head>
  <title>Title</title>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>

<body>
  <div class="jumbotron text-center">
    <h1>Bootstrap 4, Font awesome 4, Font Awesome 5 Free & Pro snippets</h1>
    <p>Essa é um otimo plugin para palavras chaves que adianta tempo na codificação implementado no vscode</p>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-12">
        <h4>Primeiro Dia</h4>
        <div class="alert alert-success" role="alert">
          <h4 class="alert-heading">b4-alert-additional-conten...</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem sunt reprehenderit et, numquam corporis expedita eligendi perspiciatis aspernatur delectus earum sapiente laboriosam excepturi quas velit dolorum exercitationem modi, a sit?</p>
          <p class="mb-0">outro paragrafo</p>
        </div>
      </div>
      <div class="col-12">
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <strong>b4-alert-closable (utiliza-se alert)</strong>
        </div>

        <script>
          $(".alert").alert();
        </script>
      </div>
      <div class="col-12">
        <div class="alert alert-primary" role="alert">
          <strong>b4-alert-default</strong>
        </div>
      </div>
      <div class="col-12">
        <div class="alert alert-primary alert-dismissible fade show" role="alert">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            <span class="sr-only">Close</span>
          </button>
          <strong>b4-alert-dismissible</strong> You should check in on some of those fields below.
        </div>
      </div>
      <div class="col-12">
        <div class="alert alert-primary" role="alert">
          <strong>
            b4-alert-link!</strong> <a href="index.php" class="alert-link">: Link</a>
        </div>
      </div>
      <div class="col-12">

        <button class="btn">b4-badge-button <span class="badge badge-primary">b4-badge-button</span></button>
      </div>
      <div class="col-12">
        <span class="badge badge-primary">b4-badge-default</span>
      </div>
      <div class="col-12">
        <h1-6>Example heading<span class="badge badge-primary">b4-badge-heading </span></h1-6>
      </div>
      <div class="col-12">
        <a href="#" class="badge badge-primary">b4-badge-link</a>
      </div>
      <div class="col-12">


        <span class="badge badge-pill badge-primary">b4-badge-pill</span>

        <h4>Segundo Dia</h4>
      </div>
      <div class="col-12">
        <div class="btn-group" role="group" aria-label="">
          <button type="button" class="btn btn-secondary">b4-bgroup-dropdown-verical</button>
          <button type="button" class="btn btn-secondary">b4-bgroup-dropdown-verical</button>
          <div class="btn-group" role="group">
            <button id="dropdownId" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownId">
              <a class="dropdown-item" href="#">b4-bgroup-dropdown-verical</a>
              <a class="dropdown-item" href="#">b4-bgroup-dropdown-verical</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="btn-group-vertical" role="group" aria-label="">
          <button type="button" class="btn btn-secondary">b4-bgroup-dropdown-verical</button>
          <button type="button" class="btn btn-secondary">b4-bgroup-dropdown-verical</button>
          <div class="btn-group" role="group">
            <button id="dropdownId" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownId">
              <a class="dropdown-item" href="#">b4-bgroup-dropdown-verical</a>
              <a class="dropdown-item" href="#">b4-bgroup-dropdown-verical</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="btn-group btn-group-lg" role="group" aria-label="">
          <button class="btn btn-primary">b4-bgroup-size</button>
        </div>

      </div>  
      <div class="col-12">
        <div class="btn-group" role="group" aria-label="">
          <button type="button" class="btn btn-primary">b4-bgroup-default</button>
          <button type="button" class="btn btn-primary">b4-bgroup-default</button>
          <button type="button" class="btn btn-primary">b4-bgroup-default</button>
        </div>
      </div>
      <div class="col-12">
        <div class="btn-toolbar" role="toolbar" aria-label="">
          <div class="btn-group" role="group" aria-label="">
            <button type="button" class="btn btn-primary">b4-bgroup-toolbar</button>
            <button type="button" class="btn btn-primary">b4-bgroup-toolbar</button>
            <button type="button" class="btn btn-primary">b4-bgroup-toolbar</button>
          </div>
          <div class="btn-group" role="group" aria-label="">
            <button type="button" class="btn btn-primary">b4-bgroup-toolbar</button>
            <button type="button" class="btn btn-primary">b4-bgroup-toolbar</button>
          </div>
        </div>
      </div>
      <div class="col-12">
        <nav class="breadcrumb">
          <a class="breadcrumb-item" href="#">b4-breadcrumb-default</a>
          <a class="breadcrumb-item" href="#">b4-breadcrumb-default</a>
          <span class="breadcrumb-item active">b4-breadcrumb-default</span>
        </nav>
      </div>
      <div class="col-12">

        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">b4-breadcrumb-list</a></li>
          <li class="breadcrumb-item"><a href="#">b4-breadcrumb-list</a></li>
          <li class="breadcrumb-item active">b4-breadcrumb-list</li>
        </ol>
      </div>
      <div class="col-12"><a name="" id="" class="btn btn-primary" href="#" role="button">b4-button-a</a></div>

      <div class="col-12"><button type="button" name="" id="" class="btn btn-primary" class="btn-lg btn-block">b4-button-block</button></div>
      <div class="col-12">
        <p>b4-button-checkbox</p>
        <div class="btn-group" data-toggle="buttons">
          <label class="btn btn-primary active">
            <input type="checkbox" name="" id="" checked autocomplete="off">
          </label>
          <label class="btn btn-primary">
            <input type="checkbox" name="" id="" autocomplete="off">
          </label>
          <label class="btn btn-primary">
            <input type="checkbox" name="" id="" autocomplete="off">
          </label>
        </div>
      </div>

    </div>

</body>

</html>