# JACKS

## Usage

To start the service, run:

    docker-compose up --build

You will only need to issue the `--build` argument on the first run;
subsequent runs (against the same Docker daemon) may omit this. To run
in detached mode, you can add the `-d` argument.

Once the service has started, you can access the web server on port
`:5000`. A Celery Flower instance is also available on port `:5555`, to
inspect the worker queue.

**Note** You may need to change the network subnet in
[`docker-compose.yaml`](docker-compose.yaml) to avoid networking
conflicts on your host.

## Organisation

In the subdirectories here you will find:

### `jacks`

The JACKS Python package (please see [`jacks/README.md`](jacks/README.md)
for usage instructions).

### `server`

A web-based service for JACKS.

### `2018_paper_materials`

Scripts and [README](2018_paper_materials/README.txt) files with
location of results and data for the JACKS 2018 paper.

### `reference_grna_efficacies`

Trained values for JACKS's gRNA efficacies for the Avana, GeCKOv2, Yusa
1.0, TKOv1 and Whiteahead libraries as generated for the 2018 JACKS
paper. These can be used with [`run_JACKS.py`](jacks/run_JACKS.py) to
evaluate screens on these libraries without re-running the full
analysis.
