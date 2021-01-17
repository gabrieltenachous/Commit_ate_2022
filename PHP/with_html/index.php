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
    <h1>My First Bootstrap Page</h1>
    <p>Resize this responsive page to see the effect!</p>
  </div>

  <div class="container">
    <div class="row"> 
      <div class="alert alert-success" role="alert">
        <h4 class="alert-heading">b4-alert-additional-conten...</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem sunt reprehenderit et, numquam corporis expedita eligendi perspiciatis aspernatur delectus earum sapiente laboriosam excepturi quas velit dolorum exercitationem modi, a sit?</p>
        <p class="mb-0">outro paragrafo</p>
      </div>

      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <strong>b4-alert-closable (utiliza-se alert)</strong>
      </div>

      <script>
        $(".alert").alert();
      </script>

      <div class="alert alert-primary" role="alert">
        <strong>b4-alert-default</strong>
      </div>
      <div class="alert alert-primary alert-dismissible fade show" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          <span class="sr-only">Close</span>
        </button>
        <strong>b4-alert-dismissible</strong> You should check in on some of those fields below.
      </div>

      <div class="alert alert-primary" role="alert">
        <strong>
          b4-alert-link!</strong> <a href="index.php" class="alert-link">: Link</a>
      </div>

      <button class="btn">b4-badge-button <span class="badge badge-primary">b4-badge-button</span></button>

      <span class="badge badge-primary">b4-badge-default</span>

      <h1-6>Example heading<span class="badge badge-primary">b4-badge-heading </span></h1-6>

      <a href="#" class="badge badge-primary">b4-badge-link</a>

      <span class="badge badge-pill badge-primary">b4-badge-pill</span>
      
      

    </div>
  </div>

</body>

</html>