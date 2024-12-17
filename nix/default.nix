let 
  pkgs = import <nixpkgs> {};
  flake = pkgs.callPackage ./flake.nix {};
in pkgs.runCommand "test" {

}''
  cp ${./start-backend.sh} ./start-backend.sh
  patchShebangs start-backend.sh
  ./start-backend.sh
''