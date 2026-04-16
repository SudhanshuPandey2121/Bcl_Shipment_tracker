// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Shipment {

    struct Location {
        string location;
        uint256 timestamp;
    }

    struct ShipmentData {
        string id;
        Location[] history;
    }

    mapping(string => ShipmentData) public shipments;

    function createShipment(string memory _id, string memory _location) public {
        ShipmentData storage s = shipments[_id];
        s.id = _id;
        s.history.push(Location(_location, block.timestamp));
    }

    function updateLocation(string memory _id, string memory _location) public {
        shipments[_id].history.push(Location(_location, block.timestamp));
    }

    function getHistory(string memory _id) public view returns (Location[] memory) {
        return shipments[_id].history;
    }
}