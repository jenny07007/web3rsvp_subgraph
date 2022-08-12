import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ConfirmAttendee,
  DepositPaidOut,
  NewEventCreated,
  NewRSVP
} from "../generated/Web3RSVP/Web3RSVP"

export function createConfirmAttendeeEvent(
  eventID: Bytes,
  confirmAttendee: Address
): ConfirmAttendee {
  let confirmAttendeeEvent = changetype<ConfirmAttendee>(newMockEvent())

  confirmAttendeeEvent.parameters = new Array()

  confirmAttendeeEvent.parameters.push(
    new ethereum.EventParam("eventID", ethereum.Value.fromFixedBytes(eventID))
  )
  confirmAttendeeEvent.parameters.push(
    new ethereum.EventParam(
      "confirmAttendee",
      ethereum.Value.fromAddress(confirmAttendee)
    )
  )

  return confirmAttendeeEvent
}

export function createDepositPaidOutEvent(eventID: Bytes): DepositPaidOut {
  let depositPaidOutEvent = changetype<DepositPaidOut>(newMockEvent())

  depositPaidOutEvent.parameters = new Array()

  depositPaidOutEvent.parameters.push(
    new ethereum.EventParam("eventID", ethereum.Value.fromFixedBytes(eventID))
  )

  return depositPaidOutEvent
}

export function createNewEventCreatedEvent(
  eventID: Bytes,
  createorAddress: Address,
  eventTimestamp: BigInt,
  maxCapacity: BigInt,
  deposit: BigInt,
  eventDataCID: string
): NewEventCreated {
  let newEventCreatedEvent = changetype<NewEventCreated>(newMockEvent())

  newEventCreatedEvent.parameters = new Array()

  newEventCreatedEvent.parameters.push(
    new ethereum.EventParam("eventID", ethereum.Value.fromFixedBytes(eventID))
  )
  newEventCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "createorAddress",
      ethereum.Value.fromAddress(createorAddress)
    )
  )
  newEventCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "eventTimestamp",
      ethereum.Value.fromUnsignedBigInt(eventTimestamp)
    )
  )
  newEventCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "maxCapacity",
      ethereum.Value.fromUnsignedBigInt(maxCapacity)
    )
  )
  newEventCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "deposit",
      ethereum.Value.fromUnsignedBigInt(deposit)
    )
  )
  newEventCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "eventDataCID",
      ethereum.Value.fromString(eventDataCID)
    )
  )

  return newEventCreatedEvent
}

export function createNewRSVPEvent(
  eventID: Bytes,
  confirmAttendee: Address
): NewRSVP {
  let newRsvpEvent = changetype<NewRSVP>(newMockEvent())

  newRsvpEvent.parameters = new Array()

  newRsvpEvent.parameters.push(
    new ethereum.EventParam("eventID", ethereum.Value.fromFixedBytes(eventID))
  )
  newRsvpEvent.parameters.push(
    new ethereum.EventParam(
      "confirmAttendee",
      ethereum.Value.fromAddress(confirmAttendee)
    )
  )

  return newRsvpEvent
}
